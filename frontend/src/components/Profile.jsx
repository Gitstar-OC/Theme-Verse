import PropTypes from 'prop-types';
import ProfileImage from '../assets/Profile.jpeg'; // Import the profile image

const Profile = ({ size }) => {
  // Calculate dimensions based on the size prop
  const dimensions = size === 'small' ? 'w-48 h-48' : 'w-80 h-80';

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className={`shape relative flex items-center justify-center ${dimensions} rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-r from-primary to-secondary overflow-hidden animate-morph`}>
        <img src={ProfileImage} alt="Profile" className="absolute inset-0 w-full h-full object-cover" />
      </div>
    </div>
  );
}

Profile.propTypes = {
  size: PropTypes.oneOf(['small', 'large']).isRequired,
};

export default Profile;
