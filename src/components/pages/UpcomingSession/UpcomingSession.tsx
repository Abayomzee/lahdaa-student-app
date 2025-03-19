/** @format */

import React, { useEffect } from "react";
import { Workshops, Wrapper } from "./style";
import { WorkshopCard } from "components/organisms/WorkshopCard";
import { PageAnimation } from "components/templates/PageAnimation";
import { useApi } from "utils/hooks";
import endpoints from "services/endpoints";
import { SpinnerContainer } from "styles/Components/SpinnerContainer";
import { SpinnerIcon } from "components/atom/SvgIcon";
import { EmptyDataState } from "components/molecules/EmptyDataState";

// Type defination
interface Props {}

// Component
const UpcomingSession: React.FC<Props> = () => {
  // Api
  const upcomingSessionApi = useApi<any>();

  // Methods
  const getUpcomingSessions = async () => {
    // studentCoursesUrl
    await upcomingSessionApi.sendRequest(
      "POST",
      endpoints.studentUpcomingCoursesUrl,
      {
        course_type_id: 3,
      }
    );
  };

  // Effects
  useEffect(() => {
    getUpcomingSessions();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * {
    "id": "235",
    "course_name": "Typescript Programming Language",
    "course_type": "2",
    "sub_title": null,
    "course_overview": "TypeScript is an open-source, strongly typed programming language that builds on JavaScript by adding static type definitions. Developed and maintained by Microsoft, it was first introduced in 2012. TypeScript is a superset of JavaScript, meaning any valid JavaScript code is also valid TypeScript code. The primary aim of TypeScript is to make it easier to develop and maintain large-scale applications by introducing types and additional tooling features.",
    "class_size": null,
    "course_category": "6",
    "level_of_competence": "3",
    "course_requirements": null,
    "outcomes": null,
    "about_course": null,
    "course_availability": null,
    "thumbnail_file_url": "https://api.steviapro.com/storage/uploads/thumbnails/1732021241_ts-img.png",
    "promo_video_url": "https://www.youtube.com/watch?v=D4nhaszNW4o&t=351s",
    "course_rating": null,
    "price": null,
    "ng_price": "0",
    "is_free_course": "1",
    "country": null,
    "start_date": null,
    "end_date": null,
    "is_discounted": "0",
    "discount_price": null,
    "is_published": "1",
    "created_by": "1",
    "created_at": "2024-11-19 13:00:41",
    "updated_at": "2024-11-19 13:05:40",
    "is_deleted": "0",
    "is_featured_course": "0",
    "language": "81",
    "location": "in_person",
    "description": "1, 234 place, 456 street.",
    "link_to_more_information": "https://www.typescriptlang.org/",
    "last_day_to_enrol": null,
    "link_to_document": null,
    "timezone": null,
    "session_duration": null,
    "meeting_link": "https://meet.google.com/kmy-oxro-xsa",
    "instructor_data": [
        {
            "phone_number": "+447490481310",
            "email": "tobiwilliams184@gmail.com",
            "professional_title": "Software Engineer",
            "profile_picture_url": "https://api.steviapro.com/storage/uploads/profile_pictures/1732230076_WhatsApp Image 2024-05-20 at 1.39.03 PM.jpeg",
            "profile_url": "tobiloba-williams-TZFbhOo",
            "about_you": "David is a skilled mobile app developer working at Aella Microfinance Bank, with a deep passion for learning and problem-solving. He often seeks creative solutions for his projects, which span both frontend and backend development, particularly using technologies like React, Flutter, and Tailwind CSS. David's inquiries reflect his keen focus on UI/UX design, custom components, and efficient layouts, as well as managing complex functionalities like pagination, navigation, and timers.\r\n\r\nHis attention to detail is evident in his work on custom widgets, animations, and layouts, whether he's fine-tuning SVG icons, radio buttons, or constructing reusable elements. Beyond his technical prowess, David is thoughtful about building meaningful relationships and values intentionality, especially in his personal life. His recent projects showcase his dedication to creating seamless user experiences, often tackling design challenges with innovation.",
            "name": "David Igbokwe"
        }
    ],
    "course_times": [
        {
            "course_time_id": "153",
            "course_time_uuid": "a279dce7-9eca-4741-9f92-0cf9e281d163",
            "course_id": "235",
            "start_date": "2024-11-20",
            "end_date": null,
            "start_time": "12:00",
            "end_time": "14:00",
            "timezone": "46",
            "is_deleted": "0",
            "created_by": "1",
            "created_at": "2024-11-19 13:05:40",
            "updated_at": null
        }
    ],
    "other_course_instructors": [
        {
            "course_instructor_id": "287",
            "course_instructor_uuid": "e772fba3-fece-4bda-af9d-90605cc5d608",
            "course_id": "235",
            "email": "null",
            "is_deleted": "0",
            "created_by": "1",
            "created_at": "2024-11-19 13:05:40",
            "updated_at": "2024-11-19 06:05:40"
        }
    ],
    "course_outcomes": [
        {
            "course_outcome_id": "158",
            "course_id": "235",
            "topic": "Type safety",
            "description": "Some text about it here",
            "created_by": "1",
            "created_at": "2024-11-19 13:01:09",
            "updated_at": "2024-11-19 13:01:09",
            "is_deleted": "0"
        },
        {
            "course_outcome_id": "159",
            "course_id": "235",
            "topic": "Type inference",
            "description": "Some stuff about it here",
            "created_by": "1",
            "created_at": "2024-11-19 13:01:09",
            "updated_at": "2024-11-19 13:01:09",
            "is_deleted": "0"
        }
    ],
    "course_prices": [
        {
            "course_price_id": "351",
            "course_price_uuid": "6d3742be-9385-4513-8a2a-20bd5e25c71b",
            "currency": "19",
            "price": "50",
            "promo_price": "40",
            "course_id": "235",
            "created_by": "1",
            "is_deleted": "0",
            "created_at": "2024-11-19 13:02:51",
            "updated_at": "2024-11-19 13:02:51"
        },
        {
            "course_price_id": "352",
            "course_price_uuid": "d691c822-d038-47f8-bd77-0e1cb8f9d028",
            "currency": "76",
            "price": "400",
            "promo_price": "350",
            "course_id": "235",
            "created_by": "1",
            "is_deleted": "0",
            "created_at": "2024-11-19 13:02:51",
            "updated_at": "2024-11-19 13:02:51"
        }
    ]
}
   */

  // Data to display
  return (
    <>
      {upcomingSessionApi?.loading ? (
        <SpinnerContainer>
          <PageAnimation>
            <SpinnerIcon width={22} height={22} className="with-spinner" />
          </PageAnimation>
        </SpinnerContainer>
      ) : (
        <PageAnimation>
          <Wrapper>
            {!upcomingSessionApi.data?.courses?.length ? (
              <EmptyDataState
                $label="Enroll Now"
                $subLabel="You will see all your upcoming courses here"
              />
            ) : (
              <>
                <Workshops className="mt-15">
                  {upcomingSessionApi?.data?.courses.map(
                    (course: any, i: any) => (
                      <WorkshopCard key={i} $data={course} />
                    )
                  )}

                  <WorkshopCard $empty />
                  <WorkshopCard $empty />
                </Workshops>
              </>
            )}
          </Wrapper>
        </PageAnimation>
      )}
    </>
  );
};

export default UpcomingSession;
