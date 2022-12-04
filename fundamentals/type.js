var course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals",
    lessonsCount: 10
};
//for defining custom object types is better to use interfaces
function printCourse(course) {
    var title = course.title, subtitle = course.subtitle, lessonsCount = course.lessonsCount;
    console.log("Title: ".concat(title, ", Subtitle ").concat(subtitle, ", lessonCount ").concat(lessonsCount));
}
printCourse(course);
