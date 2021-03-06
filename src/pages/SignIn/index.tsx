import React from 'react';
import { useAuth } from '../../contexts/auth';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  }
};

const SignIn: React.FC = () => {
  const { signed, signIn } = useAuth();
  console.log(signed);

  function handleSignIn() {
    signIn();
  }

  return (
    <div style={styles.container}>
      <button title="Sign in" onClick={handleSignIn}>Sign in</button>
    </div>
  );
}

export default SignIn;