# EduNavigator

EduNavigator is an interactive web application designed to guide students through their educational journeys by providing a platform to explore various courses. Users can search for courses, filter by categories, and sort them based on ratings or dates added.

## Features

- **Course Listing**: Displays a list of courses with details such as title, category, description, rating, and date added.
- **Search Functionality**: Users can search for courses by title or category.
- **Category Filtering**: Courses can be filtered based on specific categories such as Computer Science, Data Science, Design, and Business.
- **Sorting Options**: Users can sort courses by rating or date added.
- **User Interaction**: Each course has an "Enroll Now" button that provides feedback when clicked.

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To run EduNavigator locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/edunavigator.git
   cd edunavigator
   ```

2. **Open `index.html` in your web browser**:
   You can simply double-click the `index.html` file or use a local server.

## File Structure

- `index.html`: The main HTML file that contains the structure of the web application.
- `styles.css`: The stylesheet that contains styles for the application.
- `app.js`: The JavaScript file that handles rendering courses, searching, filtering, and sorting.

## Sample Course Data

The application includes a sample dataset for courses, which consists of:

```javascript
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
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or would like to add new features, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors and educators who inspire continuous learning and development.
