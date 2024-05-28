import React  from "react";
import "./css/Myservices.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Myservices = () => {
    return ( 
        <>
        <div className="services mt-4">
            <h2><normal>Technical</normal> Skills</h2>
            <div class="row">
                    <div className="column">
                        <div className="card">
                            <i class="bi bi-code"></i>
                            <h4><normal>Languages</normal></h4>
                            <ul class="list-unstyled " style={{ fontSize: "105%",fontWeight:"bold" }}>
                                <li >PYTHON</li>
                                <li >C++</li>
                                <li >JAVA</li>
                                <li >HTML</li>
                                <li >CSS</li>
                                <li>JAVASCRIPT</li>
                            </ul>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card ">
                            <i class="bi bi-code-slash pt-1"></i>
                            <h4><normal>Technical Stacks</normal></h4>
                            
                            <ul class="list-unstyled pb-1" style={{ fontSize: "148%" }}>
                                <li><normal>M</normal>ongoDB</li>
                                <li><normal>E</normal>xpress</li>
                                <li><normal>R</normal>eact</li>
                                <li><normal>N</normal>ode.JS</li>
    
                            </ul>
                        </div>
                    </div>


                    <div className="column">
                        <div className="card p-3">
                            <i class="bi bi-braces pt-1"></i>
                            <h4><normal>Frameworks</normal></h4>
                            <ul class="list-unstyled " style={{ fontSize: "150%",paddingBottom:"29%" }}>
                                <li >React</li>
                                <li >Bootstrap</li>
                               
                            </ul>
                        </div>
                    </div>



                    <div className="column">
                        <div className="card p-3">
                            <i class="bi bi-tools"></i>
                            <h4><normal>Tools</normal></h4>
                            <ul class="list-unstyled" style={{ fontSize: "105%",fontWeight:"bold", paddingBottom: "29%" }}>
                                <li >VS Code</li>
                                <li >Jupyter Notebook</li>
                                <li >GIT/GITHub</li>
                                
                            </ul>
                        </div>
                    </div>
            </div>
                
                
                

                
            

        </div>

            <div className="services mt-4">
                <h2><normal>Technical</normal> Skills</h2>
                <div className="row">
                    {/* Communication */}
                    <div className="col-md-4 text-center mb-3">
                        <i className="bi bi-chat-dots" style={{ fontSize: '270%', color: ' rgb(201, 185, 11)' }}></i>
                        <p>Communication</p>
                    </div>
                    {/* Problem Solving */}
                    <div className="col-md-4 text-center mb-3">
                        <i className="bi bi-lightbulb" style={{ fontSize: '270%', color: ' rgb(201, 185, 11)' }}></i>
                        <p>Problem Solving</p>
                    </div>
                    {/* Teamwork */}
                    <div className="col-md-4 text-center mb-3">
                        <i className="bi bi-people" style={{ fontSize: '270%', color: ' rgb(201, 185, 11)' }}></i>
                        <p>Teamwork</p>
                    </div>
                    {/* Leadership */}
                    <div className="col-md-4 text-center mb-3">
                        <i className="bi bi-award" style={{ fontSize: '270%', color: ' rgb(201, 185, 11)' }}></i>
                        <p>Leadership</p>
                    </div>
                    {/* Creativity */}
                    <div className="col-md-4 text-center mb-3">
                        <i className="bi bi-palette" style={{ fontSize: '270%', color: ' rgb(201, 185, 11)' }}></i>
                        <p>Creativity</p>
                    </div>
                </div>
            </div>

        







            
        

            


        </>
     );
}
 
export default Myservices;