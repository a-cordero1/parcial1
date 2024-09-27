import React from 'react';
import { Link } from 'react-router-dom'; // Para crear los enlaces a los detalles de robots
import bannerImage from './imagenes/banner.jpg'; 

const Robots = () => {
  const robots = [
    { id: 1, name: 'Pedrito', model: 'PR-001', manufacturer: 'Robotico Corp' },
    { id: 2, name: 'IronChef', model: 'IC-3000', manufacturer: 'RoboCocina Inc.' },
    { id: 3, name: 'Chispita', model: 'LT-007', manufacturer: 'SparkBots Ltd' },
    { id: 4, name: 'SirCalculín', model: 'MC-808', manufacturer: 'Mathematix Solutions' },
    { id: 5, name: 'DoctorBot', model: 'HL-9000', manufacturer: 'MedTech Industries' },
    { id: 6, name: 'ZumbaTron', model: 'ZT-2025', manufacturer: 'DanceTech Co.' }
  ];

  const styles = {
    banner: {
      width: '100%',
      height: 'auto',
      marginBottom: '20px',
    },
    container: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',
    },
    table: {
      marginTop: '20px',
      width: '100%',
    },
    footer: {
      marginTop: '20px',
      fontSize: '14px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Adopta un Robot con Robot Lovers!</h1>
      <img src={bannerImage} alt="Robot Lovers Banner" style={styles.banner} />
      <table className="table table-striped table-bordered table-hover mt-4" style={styles.table}>
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Modelo</th>
            <th>Empresa Fabricante</th>
          </tr>
        </thead>
        <tbody>
          {robots.map(robot => (
            <tr key={robot.id}>
              <td>{robot.id}</td>
              <td><Link to={`/robots/${robot.id}`}>{robot.name}</Link></td>
              <td>{robot.model}</td>
              <td>{robot.manufacturer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer style={styles.footer}>
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
};

export default Robots;
