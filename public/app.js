// Sample data for courses
const courses = [
    {
        id: 1,
        title: "Introduction to Computer Science",
        category: "Computer Science",
        description: "Learn the fundamentals of computer science, programming, and problem-solving.",
        rating: 4.5,
        date: "2024-01-15"
    },
    {
        id: 2,
        title: "Data Science with Python",
        category: "Data Science",
        description: "Analyze data and build models using Python's powerful libraries.",
        rating: 4.7,
        date: "2024-02-20"
    },
    {
        id: 3,
        title: "Web Design Principles",
        category: "Design",
        description: "Understand the principles of effective web design and user experience.",
        rating: 4.2,
        date: "2024-03-05"
    },
    {
        id: 4,
        title: "Business Analytics Basics",
        category: "Business",
        description: "Gain insights into business analytics and decision-making.",
        rating: 4.8,
        date: "2024-04-10"
    }
];

// Function to render courses
function renderCourses(coursesToDisplay) {
    const coursesList = document.getElementById('coursesList');
    coursesList.innerHTML = ''; // Clear previous courses
    coursesToDisplay.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        courseDiv.innerHTML = `
            <h3>${course.title}</h3>
            <p><strong>Category:</strong> ${course.category}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Rating:</strong> ${course.rating}</p>
            <p><strong>Date Added:</strong> ${new Date(course.date).toLocaleDateString()}</p>
            <button onclick="alert('Enrolled in ${course.title}!')">Enroll Now</button>
        `;
        coursesList.appendChild(courseDiv);
    });
}

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredCourses = courses.filter(course => 
        course.title.toLowerCase().includes(searchInput) ||
        course.category.toLowerCase().includes(searchInput)
    );
    renderCourses(filteredCourses);
}

// Function to handle category filter
function handleCategoryFilter() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredCourses = courses.filter(course => {
        const matchesCategory = categoryFilter ? course.category === categoryFilter : true;
        const matchesSearch = course.title.toLowerCase().includes(searchInput) || 
                              course.category.toLowerCase().includes(searchInput);
        return matchesCategory && matchesSearch;
    });
    renderCourses(filteredCourses);
}

// Function to handle sorting
function handleSort() {
    const sortOptions = document.getElementById('sortOptions').value;
    let sortedCourses = [...courses]; // Copy original courses array

    if (sortOptions === 'rating') {
        sortedCourses.sort((a, b) => b.rating - a.rating); // Sort by rating descending
    } else if (sortOptions === 'date') {
        sortedCourses.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date descending
    }
    renderCourses(sortedCourses);
}

// Event listeners
document.getElementById('filterButton').addEventListener('click', () => {
    handleSearch();
    handleCategoryFilter();
});

document.getElementById('categoryFilter').addEventListener('change', () => {
    handleCategoryFilter();
});

document.getElementById('sortOptions').addEventListener('change', () => {
    handleSort();
});

// Initial rendering of courses
renderCourses(courses);
