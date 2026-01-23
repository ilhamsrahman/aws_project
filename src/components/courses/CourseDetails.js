import { Link, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const CourseDetails = () => {
    const [course, setCourse] = useState([]);
    const location = useLocation();
    const currId = parseInt(location.pathname.split('/').pop()).toString();
    const url =
        "https://n1m3zwh7xk.execute-api.us-east-1.amazonaws.com/FirstStage";
    const endpoint = "/courses";

    const getData = useCallback(async () => {
      try {
        const { data, status } = await axios.get(url + endpoint);
        if (status === 200) {
          let result = JSON.parse(data.body).map((item) => ({
            id: item.id,
            title: item.title,
            university: item.university,
            language: item.language,
            duration: item.duration,
            subject: item.subject,
            level: item.level,
            course_links: item.course_links || null
          }));
          console.log("currId: ", currId)
          let currentCourse = result.find(({ id }) => id === currId.toString());
          // if (!currentCourse) {
          //   history.push('/404');
          // }
          setCourse(currentCourse);
        } else {
          throw Error('Something went wrong');
        }
      } catch (err) {
        console.log(err);
      }
    },[]); //[currId, history]

    useEffect(() => {
      (async () => {
        await getData();
      })();
    }, [currId, getData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {};

  return (
    <div
      style={{
        margin: "3em",
        display: "flex",
        flexDirection: "column",
        height: "auto",
      }}
    >
      <Link to="/courses" style={{ textDecoration: "none" }}>
        <button
          style={{
            backgroundColor: "transparent",
            fontSize: "24px",
            fontWeight: "900",
            border: "none",
            margin: "5px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: "2em",
          }}
        >
          <ArrowBackIosIcon />
          Check Other Courses
        </button>
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "2em",
        }}
      >
        <div className="aspect-ratio-16-9 mb-5">
          <iframe
            width="800"
            height="500"
            src={course.course_links && course.course_links[0]}
            title="Video Player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h2 style={{ fontSize: "32px", fontWeight: "900" }}>
            {course.title}
          </h2>
          <span style={{ fontSize: "28px", fontWeight: "500" }}>
            University: {course.university}
          </span>
          <br />
          <span style={{ fontSize: "24px", fontWeight: "400" }}>
            Language: {course.language}
          </span>{" "}
          <br />
          <span style={{ fontSize: "24px", fontWeight: "400" }}>
            Duration: {course.duration}
          </span>
          <br />
          <span style={{ fontSize: "24px", fontWeight: "400" }}>
            Level: {course.level}
          </span>
          <br />
          <br />
          <span style={{ fontSize: "28px", fontWeight: "700" }}>Notes:</span>
          <br />
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              style={{ width: "100%", height: "150px", marginBottom: "1em" }}
              type="text"
              name="notes"
              {...register("notes", { required: false })}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#e7e7e7",
                fontSize: "16px",
                borderRadius: "8px",
                fontWeight: "700",
                padding: "10px 25px",
                border: "none",
                margin: "5px",
              }}
            >
              Save Me!
            </button>
          </form>
        </div>
      </div>
    </div>

    //     <div className="space-y-4">
    //       {relatedSermons.length > 0 && (
    //         <h2 className="font-bold text-xl text-blue-500">
    //           More from this series:
    //         </h2>
    //       )}
    //       {relatedSermons.length > 0 &&
    //         relatedSermons.map((sermon, i) => (
    //           <RelatedSermonCard
    //             key={sermon.id}
    //             sermonData={sermon}
    //             allSermons={allSermons}
    //           />
    //         ))}
    //     </div>
    //     <div className="space-y-4">
    //       <h2 className="font-bold text-xl text-blue-500">
    //         Other past sermons you might like:
    //       </h2>
    //       {randomSermons.length > 0 &&
    //         randomSermons.map((sermon, i) => (
    //           <RelatedSermonCard
    //             key={sermon.id}
    //             sermonData={sermon}
    //             allSermons={allSermons}
    //           />
    //         ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default CourseDetails;
