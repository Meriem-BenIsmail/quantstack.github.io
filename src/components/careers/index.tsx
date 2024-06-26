import styles from "./styles.module.css";
import { interviewDetails } from "./interviewDetails";
import Interviews from "./Interviews";
import Header from "./Header";
import VisitWTJProfile from "./VisitWTJProfile";
import JoinTheTeam from "./JoinTheTeam";

export default function Careers() {
  return (
    <div>
      <div className="main-container-with-margins">
        <div className={"container" + " " + styles.careers_container}>
          <div className={"row" + " " + "row-padding-none"}>
            <div className="col col--10 col--offset-1">
              <Header />
            </div>
          </div>
          <div className={"row" + " " + styles.join_the_team_container}>
            <div className="col col--10 col--offset-1">
              <JoinTheTeam />
            </div>
            <div className="row">
              <div className="col col--10 col--offset-1">
                <div className={styles.interviews_container}>
                  <Interviews
                    details={interviewDetails}
                    description={"Working at QuantStack"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VisitWTJProfile />
    </div>
  );
}