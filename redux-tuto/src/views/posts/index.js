import React, { useState } from "react";
import styled from "styled-components";

// Mock data for posts and authors
const initialPosts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post.",
    author: { name: "John Doe", email: "john@example.com" },
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post.",
    author: { name: "Jane Smith", email: "jane@example.com" },
  },
];

// Styled components for the layout
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  padding: 20px 0;
  font-size: 24px;
  font-weight: 700;
  background-color: #00bfa5;
  color: white;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const PostList = styled.div`
  margin-bottom: 20px;
`;

const PostCard = styled.div`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const PostContent = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const PostAuthor = styled.div`
  font-size: 12px;
  color: #666;
`;

const ActionButton = styled.button`
  font-size: 14px;
  padding: 6px 12px;
  margin-right: 10px;
  border: none;
  background-color: #00bfa5;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #009688;
  }

  &.delete {
    background-color: #f44336;

    &:hover {
      background-color: #d32f2f;
    }
  }
`;

const FormContainer = styled.div`
  padding: 15px;
  background-color: #f5f5f5;
  margin-top: 20px;
  border-radius: 10px;
`;

const FormTitle = styled.h4`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  height: 100px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 10px;
`;

// PostsPage component
const PostsPage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: { name: "", email: "" },
  });
  const [editingPost, setEditingPost] = useState(null);

  // Handle input change for new post form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle author input change
  const handleAuthorChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      author: {
        ...prev.author,
        [name]: value,
      },
    }));
  };

  // Create or Update Post
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPost) {
      // Update post
      setPosts(
        posts.map((post) => (post.id === editingPost.id ? newPost : post))
      );
      setEditingPost(null);
    } else {
      // Create new post
      setPosts([...posts, { ...newPost, id: Date.now() }]);
    }
    setNewPost({ title: "", content: "", author: { name: "", email: "" } });
  };

  // Delete Post
  const handleDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  // Edit Post
  const handleEdit = (post) => {
    setNewPost(post);
    setEditingPost(post);
  };

  return (
    <Container>
      <Header>Posts Page</Header>

      {/* Post List */}
      <PostList>
        {posts.map((post) => (
          <PostCard key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>
            <PostAuthor>
              By {post.author.name} ({post.author.email})
            </PostAuthor>
            <ActionButton onClick={() => handleEdit(post)}>Edit</ActionButton>
            <ActionButton
              className="delete"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </ActionButton>
          </PostCard>
        ))}
      </PostList>

      {/* Form for Creating or Editing Post */}
      <FormContainer>
        <FormTitle>{editingPost ? "Edit Post" : "Create New Post"}</FormTitle>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            placeholder="Post Title"
            value={newPost.title}
            onChange={handleInputChange}
            required
          />
          <TextArea
            name="content"
            placeholder="Post Content"
            value={newPost.content}
            onChange={handleInputChange}
            required
          />
          <Input
            type="text"
            name="name"
            placeholder="Author Name"
            value={newPost.author.name}
            onChange={handleAuthorChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Author Email"
            value={newPost.author.email}
            onChange={handleAuthorChange}
            required
          />
          <ActionButton type="submit">
            {editingPost ? "Update Post" : "Create Post"}
          </ActionButton>
        </form>
      </FormContainer>
    </Container>
  );
};

export default PostsPage;
