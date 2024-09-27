import React from 'react';
import { useParams } from 'react-router-dom'; // Para obtener el ID del robot seleccionado

const RobotDetail = () => {
  const robots = [
    { id: 1, name: 'Pedrito', model: 'PR-001', manufacturer: 'Robotico Corp', year: 2021, processor: 'Quad-Core 2.8GHz', features: 'AI Capable, 20kg Lifting', image: 'path-to-pedrito-image' },
    { id: 2, name: 'IronChef', model: 'IC-3000', manufacturer: 'RoboCocina Inc.', year: 2020, processor: 'Dual-Core 2.2GHz', features: 'Cooking Assistant, Temperature Control', image: 'path-to-ironchef-image' },
    { id: 3, name: 'Chispita', model: 'LT-007', manufacturer: 'SparkBots Ltd', year: 2019, processor: 'Single-Core 1.5GHz', features: 'Electric Maintenance, 10kg Lifting', image: 'path-to-chispita-image' },
    { id: 4, name: 'SirCalculín', model: 'MC-808', manufacturer: 'Mathematix Solutions', year: 2022, processor: 'Hexa-Core 3.0GHz', features: 'Math Problem Solving, Research Capable', image: 'path-to-sircalculin-image' },
    { id: 5, name: 'DoctorBot', model: 'HL-9000', manufacturer: 'MedTech Industries', year: 2021, processor: 'Octa-Core 3.2GHz', features: 'Medical Diagnosis, Remote Assistance', image: 'path-to-doctorbot-image' },
    { id: 6, name: 'ZumbaTron', model: 'ZT-2025', manufacturer: 'DanceTech Co.', year: 2023, processor: 'Dual-Core 2.0GHz', features: 'Dance Assistant, Music Synchronization', image: 'path-to-zumbatron-image' }
  ];

  const { id } = useParams(); // Obtiene el ID de los parámetros de la URL
  const robot = robots.find(r => r.id === parseInt(id));

  if (!robot) {
    return <h2>Robot no encontrado</h2>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>{robot.name} - Modelo {robot.model}</h1>
      <img src={robot.image} alt={robot.name} style={{ width: '100%', height: 'auto' }} />
      <p><strong>Fabricante:</strong> {robot.manufacturer}</p>
      <p><strong>Año de Fabricación:</strong> {robot.year}</p>
      <p><strong>Capacidad de Procesamiento:</strong> {robot.processor}</p>
      <p><strong>Características:</strong> {robot.features}</p>
    </div>
  );
};

export default RobotDetail;
