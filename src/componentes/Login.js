import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from './imagenes/banner.jpg'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const correctUsername = 'a.acosta';
  const correctPassword = '12345';

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      setError(false);
      navigate('/robots');
    } else {
      setError(true);
    }
  };

  const styles = {
    pageContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Asegura que el contenido esté centrado verticalmente
      backgroundColor: '#f8f9fa',
    },
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    banner: {
      width: '170%', 
      maxWidth: '500px', 
      height: 'auto',
      
    },
    title: {
      fontSize: '24px',
      marginBottom: '20px',
      marginTop: '20px',
      fontWeight: 'bold',
      textAlign: 'center', 
      //whiteSpace: 'nowrap',  
    },
    formGroup: {
      marginBottom: '15px',
      textAlign: 'left',
    },
    label: {
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '8px',
      margin: '5px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px',
      margin: '5px',
      width: '45%',
      borderRadius: '5px',
      fontWeight: 'bold',
    },
    buttonPrimary: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
    },
    buttonSecondary: {
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
    },
    error: {
      color: 'red',
      fontSize: '14px',
    },
    footer: {
      marginTop: '20px',
      fontSize: '12px',
      color: '#888',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h1 style={styles.title}>Adopta un Robot con Robot Lovers!</h1>
        {/* Añadimos la imagen del banner */}
        <img src={bannerImage} alt="Robot Lovers Banner" style={styles.banner} />
        <form onSubmit={handleLogin}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Nombre de usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button
            type="submit"
            style={{ ...styles.button, ...styles.buttonPrimary }}
          >
            Ingresar
          </button>
          <button
            type="button"
            style={{ ...styles.button, ...styles.buttonSecondary }}
            onClick={() => {
              setUsername('');
              setPassword('');
            }}
          >
            Cancelar
          </button>
          {error && (
            <p style={styles.error}>Error de autenticación. Revise sus credenciales</p>
          )}
        </form>
        <footer style={styles.footer}>
          <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
