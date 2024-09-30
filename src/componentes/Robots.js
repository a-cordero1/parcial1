import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import bannerImage from './imagenes/banner.jpg';
import translations from './Translations'; 

const Robots = () => {
  const [robots, setRobots] = useState([]); 
  const [selectedRobot, setSelectedRobot] = useState(null);
  const [language, setLanguage] = useState('es'); 
  const [error, setError] = useState(false); 

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await axios.get('http://localhost:3001/robots');
        setRobots(response.data); 
      } catch (err) {
        console.error('Error fetching robots:', err);
        setError(true); 
      }
    };

    fetchRobots(); 
  }, []); 

  const handleRobotClick = (robot) => {
    setSelectedRobot(robot); 
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  const styles = {
    banner: {
      width: '100%',
      height: 'auto',
      marginBottom: '20px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      display: 'flex', 
      flexDirection: 'column', 
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',
    },
    tableAndDetails: {
      display: 'flex', 
      justifyContent: 'space-between',
    },
    table: {
      width: '65%',
      borderCollapse: 'collapse', 
      marginBottom: '20px',
    },
    tableHeader: {
      backgroundColor: '#343a40', 
      color: '#fff', 
      textAlign: 'left',
      padding: '10px',
    },
    tableRow: {
      borderBottom: '1px solid #ccc', 
      cursor: 'pointer',
    },
    tableCell: {
      padding: '10px',
      textAlign: 'left',
    },
    tableRowAlt: {
      backgroundColor: '#f8f9fa', 
    },
    details: {
      width: '30%',
      padding: '10px',
      border: '1px solid #ccc', 
      borderRadius: '5px',
      display: selectedRobot ? 'block' : 'none',
    },
    detailTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    image: {
      width: '100%',
      height: 'auto',
      marginBottom: '15px',
    },
    detailItem: {
      marginBottom: '10px',
      fontSize: '16px',
    },
    buttonLang: {
      backgroundColor: '#17a2b8',
      color: '#fff',
      border: 'none',
      width: '30%',
      padding: '10px',
      margin: '20px auto',
      fontWeight: 'bold',
      borderRadius: '5px',
    },
    footer: {
      marginTop: '20px',
      fontSize: '12px',
      color: '#888',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{translations[language].mainTitle}</h1>
      <img src={bannerImage} alt="Robot Lovers Banner" style={styles.banner} />

      <div style={styles.tableAndDetails}>
        {error ? (
          <p>Error al cargar los robots. Intenta nuevamente más tarde.</p>
        ) : (
          <>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.tableHeader}>{translations[language].tableHeader.id}</th>
                  <th style={styles.tableHeader}>{translations[language].tableHeader.name}</th>
                  <th style={styles.tableHeader}>{translations[language].tableHeader.model}</th>
                  <th style={styles.tableHeader}>{translations[language].tableHeader.manufacturer}</th>
                </tr>
              </thead>
              <tbody>
                {robots.map((robot, index) => (
                  <tr
                    key={robot.id}
                    onClick={() => handleRobotClick(robot)}
                    style={index % 2 === 0 ? { ...styles.tableRow } : { ...styles.tableRow, ...styles.tableRowAlt }}
                  >
                    <td style={styles.tableCell}>{robot.id}</td>
                    <td style={styles.tableCell}>{robot.nombre}</td>
                    <td style={styles.tableCell}>{robot.modelo}</td>
                    <td style={styles.tableCell}>{robot.empresaFabricante}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={styles.details}>
              {selectedRobot && (
                <>
                  <h2 style={styles.detailTitle}>
                    {`${translations[language].details.title} ${selectedRobot.nombre}`}
                  </h2>
                  <img src={selectedRobot.imagen} alt={selectedRobot.nombre} style={styles.image} />
                  <p style={styles.detailItem}><strong>➔ {translations[language].details.year}</strong> {selectedRobot.añoFabricacion}</p>
                  <p style={styles.detailItem}><strong>➔ {translations[language].details.processor}</strong> {selectedRobot.capacidadProcesamiento}</p>
                  <p style={styles.detailItem}><strong>➔ {translations[language].details.features}</strong> {selectedRobot.humor}</p>
                </>
              )}
            </div>
          </>
        )}
      </div>

      <button onClick={toggleLanguage} style={styles.buttonLang}>
        {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      </button>

      <footer style={styles.footer}>
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
};

export default Robots;