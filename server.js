const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Make sure your static files are in a folder named "public"

// Example course data
const courses = [
    {
        id: 1,
        title: 'Introduction to Programming',
        description: 'Learn the basics of programming.',
        tags: ['programming', 'basics'],
        category: 'Computer Science',
        dateAdded: '2023-01-01',
        ratings: [4, 5, 3],
        reviews: []
    },
    {
        id: 2,
        title: 'Data Science Fundamentals',
        description: 'An introduction to data science concepts.',
        tags: ['data science', 'analytics'],
        category: 'Data Science',
        dateAdded: '2023-02-01',
        ratings: [5, 5, 4],
        reviews: []
    },
    // Add more course objects here...
];

// User data simulation
const users = [
    { id: 1, username: 'guest', profile: { name: 'Guest User', email: 'guest@example.com', lastLogin: '2023-09-01' } }
];

// API to get all courses
app.get('/courses', (req, res) => {
    const { category, sort, search } = req.query;
    let filteredCourses = courses;

    // Filter by category
    if (category) {
        filteredCourses = filteredCourses.filter(course => course.category === category);
    }

    // Search by title or tags
    if (search) {
        filteredCourses = filteredCourses.filter(course => 
            course.title.toLowerCase().includes(search.toLowerCase()) ||
            course.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
        );
    }

    // Sort courses
    if (sort === 'rating') {
        filteredCourses.sort((a, b) => averageRating(b.ratings) - averageRating(a.ratings));
    } else if (sort === 'date') {
        filteredCourses.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }

    res.json(filteredCourses);
});

// API to get a specific course by ID
app.get('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course not found.');
    res.json(course);
});

// Function to calculate average rating
function averageRating(ratings) {
    if (ratings.length === 0) return 0;
    return (ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(1);
}

// User profile API
app.get('/user/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found.');
    res.json(user);
});

// Serve the index.html at the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Ensure your HTML is in the 'public' folder
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
