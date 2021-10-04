import React from 'react';
import { Container} from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const Support = () => {
    const style={
        with:'200px',
        height:'190px',
        borderRadius:'100%',
        margin:'20px'

    }
    return (
       
        <div className="text-light">
      <NavBar></NavBar>
     
            <Container style={{marginBottom:'100px'}}>
                <div className="text-center ">
                <div className="mt-5">
                    <p>This guys are always ready to help You...And thay are very Supportive.
                        Dealy 6 hours the guyse are Supported you.. You can take all benifits here.. So Apply Now! And Fullfill Yours Dreames . 
                    </p>
                    <h1><i class="fas fa-chalkboard-teacher text-light"></i></h1>
                </div>
                <div>
                    <img style={style} src="https://scontent.fdac27-1.fna.fbcdn.net/v/t31.18172-8/23509146_1532698753512288_2068902363289722132_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGDHe0r1VFbpxoLwlsbBmcJFZS8gxCM8VQVlLyDEIzxVGdai1dSPiAZf5mBjUfrHnNMaj49AbkJyT1NoML-eU8L&_nc_ohc=eu6D0UP_5O0AX8iZkKd&_nc_ht=scontent.fdac27-1.fna&oh=393f46f1531e029c586dc2de9e83aa01&oe=6180FFC1" alt="" />
                    <h3>Shagor Ahmed</h3>
                    <h5>Full stack webDeveloper</h5>

                </div>
                <div>
                    <img style={style} src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/215270650_344883510577895_1704465983745947503_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH-45Nu_F0eZJOqwrAzFhD1TJMWR48Cro9MkxZHjwKujzLfhVBPqNVC_wFh8UtPF5_TW7MoXy5Bju-IVQNsXl3O&_nc_ohc=didcrMD8kBoAX9DsqD7&_nc_ht=scontent.fdac27-1.fna&oh=abfaa7e38b54e0aec7f7546478ee3cf8&oe=61825D5C" alt="" />
                    <h3>Mejbah Persion</h3>
                    <h5>Full stack webDeveloper</h5>
                </div>
                <div>
                    <img style={style} src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/237486074_3066869396931612_1250967033262156293_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFFn1CLCnxxm3FmUpgGAiUFfS6swavg8Al9LqzBq-DwCa-x5fUunoxhtvSSbqcgNoTbTAxFyQqQV82iiCk3kT9H&_nc_ohc=ExoepbB4Ap4AX8Y8G4Q&_nc_ht=scontent.fdac27-1.fna&oh=5cee5cb4d498f80d9cc642b055bd99e6&oe=61608EF9" alt="" />
                    <h3>Md Giyas</h3>
                    <h5>Full stack webDeveloper</h5>
                </div>
                <div>
                    <img style={style} src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/242815797_2994139360862302_4109486057757988837_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHxA7c3SfZjMek6OyQFh56wfB3AXhsJePd8HcBeGwl491oV8BdQ7XVFzqh8aH4OvYH6klCfPCfG4lTWaTbvdijh&_nc_ohc=GeOlEc1bzgAAX916RDT&_nc_ht=scontent.fdac27-1.fna&oh=fe9108159ed513b9820ee243a1ad261c&oe=61819225" alt="" />
                    <h3>Roky Das</h3>
                    <h5>Full stack webDeveloper</h5>
                </div>
                <div>
                    <img style={style} src="https://scontent.fdac27-1.fna.fbcdn.net/v/t31.18172-8/30424867_1977140462604015_4070710970211142030_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHS4il0uBe73UXs2QyP2Wo9TE1S3lKaosdMTVLeUpqix4R5C0sP7PsMvfESyI322qwVVmRwZrNj5X9Aw3IwEiQy&_nc_ohc=RkqFvatYsL8AX-1B0TA&tn=ctYYRZDCC4i3Gkrh&_nc_ht=scontent.fdac27-1.fna&oh=04941b8a794c078b5efdafc882769988&oe=618146B6" alt="" />
                    <h3>MuQtadir Tamim </h3>
                    <h5>Full stack webDeveloper</h5>
                </div>
                <div>
                    <img style={style} src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/207728640_1296173147465382_5119571433910960315_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGHThZG8TO9kgERKf87JJShMaFhbW-a3AIxoWFtb5rcAt6yGYdIcXmVU5yRCCRokVFGhcu-fmApVTciCqjal27w&_nc_ohc=xsL7RXi8KeEAX_7w_Nn&_nc_ht=scontent.fdac27-1.fna&oh=260326b5596648faebea7c5b48726aa5&oe=617ED9F8" alt="" />
                    <h3>Milton</h3>
                    <h5>Full stack webDeveloper</h5>
                </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Support;