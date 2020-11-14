import Image from 'react-bootstrap/Image';
import profile from '../../images/myprofile.JPG'

const MyPage = () => {
    return (
        <>
            <Image src={profile} fluid />
        </>
    );
};

export default MyPage;
