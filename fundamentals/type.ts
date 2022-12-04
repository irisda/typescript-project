type iris = "draft" | "published" | "unpublished" | "archived";

type Course = {
    title: string, 
    subtitle: string,
    lessonsCount: number
};

// interface custom object type we use interface for objects moslty vetem per obejektet
interface ICourse {
    title:string, 
    subtitle:string
    lessonsCount?:number //this property is optional
}

let course: ICourse = {
    title: "Typescript Bootcamp", 
    subtitle: "Learn the language fundamentals",
    lessonsCount: 10
};

//for defining custom object types is better to use interfaces

function printCourse(course:ICourse): ICourse{
    const { title ,subtitle, lessonsCount} = course
    console.log(`Title: ${title}, Subtitle ${subtitle}, lessonCount ${lessonsCount}`)
    return {
        title,
        subtitle,
        lessonsCount
    }
}

printCourse(course)

interface HasId {
    id:string;
}
interface HasTitle {
    title:string;
    description:string;
}

type Courses = HasId & HasTitle

