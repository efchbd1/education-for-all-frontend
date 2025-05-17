# Domain Types

This directory contains core domain-related TypeScript types that represent key entities in the application. These types are used throughout the system for modeling users, counselors, posts, and discussion topics.

## File Overview

### `counselor.types.ts`  
Defines the structure for a counselor, including personal details, professional background, and contact information.

### `post.types.ts`  
Contains two main type definitions:
- One representing a full post object, including metadata such as date, likes, and author information.
- Another for creating a new post, capturing the required input fields while excluding system-generated properties.

### `topic.types.ts`  
Defines the shape of a discussion topic, including its metadata, creator, and associated post IDs.  
Also includes a type for topic creation or update forms, excluding fields that are automatically managed by the system.

### `user.types.ts`  
Includes three types for different stages and perspectives of user data:
- One for login (sign-in) data.
- One for full user registration information.
- One for read-only user data used after successful authentication.

## Purpose

These domain types represent the foundational data models of the application. They are essential for data validation, server communication, and consistent type safety across components and services.

Using these types promotes maintainability, reduces duplication, and helps ensure that logic related to core entities remains robust and scalable.
