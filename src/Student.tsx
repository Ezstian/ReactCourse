import PropTypes from "prop-types";

type StudentProps = {
    age: any;
    name: string;
    isStudent: boolean;
};
function Student(props: StudentProps) {
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>is student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}
Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps={
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student;