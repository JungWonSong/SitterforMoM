import React, {useEffect} from 'react';
import axios from 'axios';
import {getStorageItem} from 'utils/sessionstorage';

const MyPage = () => {
    const AUTH_TOKEN = 'Token ' + getStorageItem('jwtToken');

    useEffect(() => {
        
        getUserInfo();

      return () => {
      };
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getUserInfo = async (e) => {
        
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;   
        await axios
            .get('/api/accounts/userlist/?userId=' + getStorageItem('id'))
            .then(({ data }) => {
                console.log(data);
                setBasicData(data);
            })
            .catch((e) => {
                console.error(e);
                if (e.response) {
                    const { data } = e.response;
                    console.error(data);
                }
                return false;
            });


        await axios
            .get('/api/accounts/profile/?user=' + getStorageItem('id'))
            .then(({ data }) => {
                console.log(data);
                setProfileData(data);
            })
            .catch((e) => {
                console.error(e);
                if (e.response) {
                    const { data } = e.response;
                    console.error(data);
                }
                return false;
            });

    };

    function setProfileData(data) {

        var sPerson = JSON.stringify(data);
        var oPerson = JSON.parse(sPerson);

        var profile_image_div = document.getElementById("profile_image_div");
        profile_image_div.style = "background-image: url(" + oPerson[0].image + ")";
        console.log(oPerson[0].id);
        console.log(oPerson[0].nickname);
    };

    function setBasicData(data) {
        
    };

    const changeImage = (e) => {
  
        var profile_image = document.getElementById("profile_image");
        var fReader = new FileReader();
        fReader.readAsDataURL(profile_image.files[0]);
        fReader.onloadend = function(event) {
           var profile_image_div = document.getElementById("profile_image_div");
            profile_image_div.style = "background-image: url(" + event.target.result + ")";

        }
        
    };

    return (
        <div className="container-fluid">
            <section className="profile_section">
            <h2 className="profile_title">MY 엄마들을 위한 공간</h2>
            <div className="profile">
                <aside className="profile_aside">
                    <div className="profile_brick">
                        <div className="imageCircle" id="profile_image_div" >
                            <div className="imageJoin">
                                <input type="file" accept="image/*" id="profile_image" onChange={changeImage}/>
                                
                            </div>
                        </div> 
                    </div>
                </aside>
            </div>
            </section>
        </div>
    );
};

export default MyPage;
