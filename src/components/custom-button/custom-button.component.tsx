import './custom-button.styles.scss';
import firebase from '../../firebase/firebase.utils';

interface CustomButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => Promise<firebase.auth.UserCredential>;
  isGoogleSignIn?: boolean
}

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }: CustomButtonProps) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in ' : ''}custom-button`} {...otherProps} >
    {children}
  </button>
)

export default CustomButton;