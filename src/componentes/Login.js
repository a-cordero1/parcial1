import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import bannerImage from './imagenes/banner.jpg';
import translations from './Translations'; 

const Login = () => {
    const [login, setLogin] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [language, setLanguage] = useState('es'); 
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3001/login', {
                login, 
                password
            });

            if (response.status === 200 && response.data.status === 'success') {
                setError(false);
                navigate('/robots');
            } else {
                setError(true);
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError(true);
            }
        }
    };

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
    };

    const styles = {
        pageContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f8f9fa',
        },
        container: {
            maxWidth: '400px',
            margin: '0 auto',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
        },
        banner: {
            width: '100%',
            height: 'auto',
            marginBottom: '20px',
        },
        title: {
            fontSize: '24px',
            marginBottom: '20px',
            fontWeight: 'bold',
            textAlign: 'center',
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
            width: '30%',
            borderRadius: '5px',
            fontWeight: 'bold',
            display: 'inline-block',
            border: 'none',
        },
        buttonPrimary: {
            backgroundColor: '#007bff',
            color: '#fff',
        },
        buttonSecondary: {
            backgroundColor: '#dc3545',
            color: '#fff',
        },
        buttonLang: {
            backgroundColor: '#17a2b8',
            color: '#fff',
        },
        buttonGroup: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        error: {
            color: 'red',
            fontSize: '14px',
        },
        footer: {
            marginTop: '20px',
            fontSize: '12px',
            color: '#888',
            textAlign: 'center',
        },
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.container}>
                <h1 style={styles.title}>{translations[language].login.title}</h1>
                <img src={bannerImage} alt="Robot Lovers Banner" style={styles.banner} />
                <form onSubmit={handleLogin}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>{translations[language].login.username}</label>
                        <input
                            type="text"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>{translations[language].login.password}</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.buttonGroup}>
                        <button
                            type="submit"
                            style={{ ...styles.button, ...styles.buttonPrimary }}
                        >
                            {translations[language].login.submit}
                        </button>
                        <button
                            type="button"
                            style={{ ...styles.button, ...styles.buttonSecondary }}
                            onClick={() => {
                                setLogin('');
                                setPassword('');
                            }}
                        >
                            {translations[language].login.cancel}
                        </button>
                        <button
                            type="button"
                            onClick={toggleLanguage}
                            style={{ ...styles.button, ...styles.buttonLang }}
                        >
                            {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                        </button>
                    </div>
                    {error && (
                        <p style={styles.error}>{translations[language].login.error}</p>
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

