import getClasses from "@/api/getClasses";
import getSections from "@/api/getSections";
import getSessions from "@/api/getSessions";
import AddStudent from "@/app/Component/Dashboard/Students/AddStudent";


const addStudentPage = async() => {

    const classes = await getClasses()
    const sections = await getSections()
    const sessions = await getSessions()

    return (
        <div>
            <AddStudent classes={classes} sections={sections} sessions={sessions}></AddStudent>
        </div>
    );
};

export default addStudentPage;