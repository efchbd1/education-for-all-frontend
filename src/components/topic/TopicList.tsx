import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, List, Card, CardContent, CardActions, Box, CircularProgress, Button, TextField } from "@mui/material";
import { TopicType } from "data/types/domainTypes/topic.types";
import { useAppDispatch, useAppSelector } from "data/hooks";
import { selectTopic } from "data/redux/topic/topic.selector";
import { fetchAllTopics } from "data/redux/topic/topic.slice";
import { fetchUserNamesForTopics } from "../../hooks/useTopicHook";
import { useRef } from "react";
import { debounce } from "lodash";
import { useTopicListStyles } from "styles/TopicList.styles";

// Format date to 'short' format in Hebrew
const formatDate = (date: string | Date): string => {
  let parsedDate: Date;

  if (typeof date === "string") {
    parsedDate = new Date(date);
  } else {
    parsedDate = date;
  }

  if (isNaN(parsedDate.getTime())) {
    return "תאריך לא תקין";
  }

  return parsedDate.toLocaleString("he-IL", {
    dateStyle: "short",
    timeStyle: "short",
  });
};

const TopicList: React.FC = () => {
  const classes = useTopicListStyles;
  const topics: TopicType[] = useAppSelector(selectTopic);
  const [usersMap, setUsersMap] = useState<{ [key: string]: string }>({});
  const [searchQuery, setSearchQuery] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const topicsPerPage = 8;

  // Keep track of userIds for which data has already been fetched
  const fetchedUserIds = useRef<Set<number>>(new Set());

  // Debounced function to avoid excessive API calls when fetching user names
  const debouncedFetch = useRef(
    debounce(
      (topicsToFetch: TopicType[]) =>
        fetchUserNamesForTopics(topicsToFetch, dispatch, setUsersMap, setIsLoading),
      300 // Delay for API call to optimize performance
    )
  );

  // Fetch all topics once on component mount
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        await dispatch(fetchAllTopics()).unwrap();
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchTopics();
  }, [dispatch]);

  // Whenever topics change, check for missing user names and fetch them
  useEffect(() => {
    const missingUserIds = topics
      .map((topic) => topic.userId)
      .filter((id) => id !== undefined && !fetchedUserIds.current.has(id)); // Get user IDs not fetched yet

    if (missingUserIds.length > 0) {
      const topicsToFetch = topics.filter((t) =>
        missingUserIds.includes(t.userId)
      );

      debouncedFetch.current(topicsToFetch); // Fetch missing users
      fetchedUserIds.current = new Set(
        Array.from(fetchedUserIds.current).concat(missingUserIds)
      );
    }
  }, [topics, dispatch]);

  // Navigate to topic page when a topic is clicked
  const handleTopicClick = (topic: TopicType) => {
    if (!topic || !topic.id) return;
    navigate(`/topic/${topic.id}`);
    window.scrollTo(0, 0);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Show loading state when topics are not yet available
  if (!topics || topics.length === 0) {
    return (
      <Box sx={classes.loadingContainer}>
        <CircularProgress size={70} thickness={5} color="secondary" />
        <Typography variant="h6" align="center" classes={classes.loadingText}>
          טוען...
        </Typography>
      </Box>
    );
  }

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) // Filter topics by title
  );

  const validTopics = filteredTopics.filter((topic) => topic && topic.title && topic.userId);

  // Calculate indices for current page
  const indexOfLastTopic = currentPage * topicsPerPage;
  const indexOfFirstTopic = indexOfLastTopic - topicsPerPage;
  const currentTopics = validTopics.slice(indexOfFirstTopic, indexOfLastTopic); // Paginate topics

  const totalPages = Math.ceil(validTopics.length / topicsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <Box sx={classes.root}>

      {/* Pagination buttons - hidden during search */}
      <Box sx={classes.pagination}>
        {!searchQuery && Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            variant="outlined"
            onClick={() => handlePageChange(index + 1)}
            sx={classes.paginationButton}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </Button>
        ))}
      </Box>

      {/* Search field */}
      <Box sx={classes.root}>
        <Typography variant="h6" align="center">
          חפשו נושא ברחבי הפורום
        </Typography>

        <TextField
          sx={classes.searchBox}
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
        />        </Box>

      {/* Topic list */}
      <List>
        {currentTopics.map((topic) => (
          <Card key={topic.id} sx={classes.card} onClick={() => handleTopicClick(topic)}>
            <CardContent sx={classes.cardContent}>
              <Typography sx={classes.title}>{topic.title}</Typography>
            </CardContent>
            <CardActions sx={classes.cardActions}>
              <Box sx={classes.infoContainer}>
                <Typography sx={classes.infoItem}>
                  <strong>בתאריך:</strong> {formatDate(topic.dateCreated).split(",")[0]}
                </Typography>
                <Typography sx={classes.infoItem}>
                  . <strong>בשעה:</strong> {formatDate(topic.dateCreated).split(",")[1]}
                </Typography>
                <Typography sx={classes.infoItem}>
                  . <strong>נשאל על ידי:</strong> {usersMap[topic.userId] || "טוען שם משתמש..."}.
                </Typography>
              </Box>
            </CardActions>
          </Card>
        ))}
      </List>
    </Box>
  );
};

export default TopicList;