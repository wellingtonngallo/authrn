import React from 'react';
import { useAuth } from '../../contexts/auth';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  }
};

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <div style={styles.container}>
      {user?.name}
      <button title="Sign out" onClick={handleSignOut}>Sign out</button>
    </div>
  );
}

export default Dashboard;