import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "./DevelopersInfo.css";

export const DevelopersInfo = ({ closeDevelopersModal }) => {    
    return (
        <>  
            <div className="modalContainer">
                <div className="titleCloseButtom">
                    <MDBBtn
                        outline
                        color="dark"
                        floating
                        role="button"
                        onClick={() => closeDevelopersModal(false)}
                    >
                        <MDBIcon fas icon="times" />
                    </MDBBtn>
                </div>
                <div className="title">
                    <h1>Desarrolladores</h1>
                </div>
                <div className="body">
                    <div className="upper">
                        <div className="developer">
                            <h5>Product Owner</h5>
                            <img src="https://media-exp1.licdn.com/dms/image/C5603AQEpyjmw9OGzMQ/profile-displayphoto-shrink_100_100/0/1626272526637?e=1671667200&v=beta&t=cScU-_ImQMYOY8_HidsxkRDkpx-7A1RJGbLwlT6jHis"/>
                            <p>Diego Rojas</p>
                        </div>
                        <div className="developer">
                            <h5>Scrum Master</h5>
                            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHglMVgMusHpA/profile-displayphoto-shrink_100_100/0/1655342300181?e=1671667200&v=beta&t=l1yhSYqB5Fy4DdZ1idVmov76EgfyArLHp0s5w2kY7aU"/>
                            <p>Yosiney Mora</p>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="developer">
                            <h5>Full-Stack</h5>
                            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHE57rY_zy6zA/profile-displayphoto-shrink_100_100/0/1585354179686?e=1671667200&v=beta&t=MrhfSnf68UiVL_3ox_uVgGO4Raib5sD70bS2FRC4uGY"/>
                            <p>Kendall Walsh</p>
                        </div>
                        <div className="developer">
                            <h5>Full-Stack</h5>
                            <img src="https://media-exp1.licdn.com/dms/image/C5603AQH05pjp9_dqzw/profile-displayphoto-shrink_100_100/0/1615303263730?e=1671667200&v=beta&t=-wha6xLthuuyc0uAvh0cLnpPnX5uD11MZ1JbJr59rU0"/>
                            <p>Enoc Castro</p>
                        </div>
                        <div className="developer">
                            <h5>Full-Stack</h5>
                            <img src="https://i.stack.imgur.com/34AD2.jpg"/>
                            <p>Luis Castillo</p>
                        </div>
                        <div className="developer">
                            <h5>Full-Stack</h5>
                            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEjINyXzwKEPQ/profile-displayphoto-shrink_100_100/0/1659238734681?e=1671667200&v=beta&t=MTGC8SRzWmHtI38D7aotDzJJmLW7PviafJ5z-gMRcPc"/>
                            <p>Oscar Ramos</p>
                        </div>
                        <div className="developer">
                            <h5>Full-Stack</h5>
                            <img src="https://media-exp1.licdn.com/dms/image/C5603AQEC5hRD0PyLPQ/profile-displayphoto-shrink_400_400/0/1651032390545?e=1671667200&v=beta&t=qTJdY--2vjmCgii6GLpkwpmBXYErLBn9YEYn-K2EhxQ"/>
                            <p>Alejandro Miranda</p>
                        </div>
                    </div>
                </div>
                <div className="footer"></div>
            </div>
        </>
    );
}