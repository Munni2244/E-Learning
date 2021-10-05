import React from 'react';
import { Container} from 'react-bootstrap';
import shagor from '../../images/sagor.jpg';
import milton from '../../images/milton.jpg';
import mejbah from '../../images/mejba.jpg';
import rocky from '../../images/rocky.jpg';
import tamim from '../../images/tamim.jpg';
import giyas from '../../images/giyas.jpg';
const Support = () => {
    const style={
        with:'200px',
        height:'190px',
        borderRadius:'100%',
        margin:'20px'

    }
    return (
       
        <div className="text-light">
            <Container style={{marginBottom:'100px'}}>
                <div className="text-center ">
                <div className="mt-5">
                    <p>This guys are always ready to help You...And thay are very Supportive.
                        Dealy 6 hours the guyse are Supported you.. You can take all benifits here.. So Apply Now! And Fullfill Yours Dreames . 
                    </p>
                    <h1><i class="fas fa-chalkboard-teacher text-light"></i></h1>
                </div>

                <div>
                    <img style={style} src={shagor} alt="" />
                    <h3>Shagor Ahmed</h3>
                    <h5>Full stack webDeveloper</h5>
                </div>

                <div>
                    <img style={style} src={mejbah} alt="" />
                    <h3>Mejbah Persion</h3>
                    <h5>Full stack webDeveloper</h5>
                </div>
                
                <div>
                    <img style={style} src={giyas} alt="" />
                    <h3>Md Giyas</h3>
                    <h5>Full stack webDeveloper</h5>
                </div>

                <div>
                    <img style={style} src={rocky} alt="" />
                    <h3>Roky Das</h3>
                    <h5>Full stack webDeveloper</h5>
                </div>

                <div>
                    <img style={style} src={tamim} alt="" />
                    <h3>MuQtadir Tamim </h3>
                    <h5>Full stack webDeveloper</h5>
                </div>
                
                <div>
                    <img style={style} src={milton} alt="" />
                    <h3>Milton</h3>
                    <h5>Full stack webDeveloper</h5>
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Support;