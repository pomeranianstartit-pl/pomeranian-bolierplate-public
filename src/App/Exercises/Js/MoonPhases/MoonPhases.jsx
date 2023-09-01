import React, { useState } from 'react';
import './MoonPhases.css';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers';

export function MoonPhases() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  let moonPhase = 0;
  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };
  //Used astronomical alghoritm translated from Pascal/Delphi to js by AI
  const calculateMoonPhase = (date) => {
    const Rok = date.getFullYear();
    const Miesiac = date.getMonth() + 1;
    const Dzien = date.getDate();
    const Godzine = date.getHours();
    const Min = date.getMinutes();
    const Sekunde = date.getSeconds();

    function rang(x) {
      let a, b;
      b = x / 360;
      a = 360 * (b - Math.floor(b));
      if (a < 0) {
        a += 360;
      }
      return a;
    }

    function faza(Rok, Miesiac, Dzien, godzina, min, sec) {
      if (Miesiac <= 2) {
        Miesiac += 12;
        Rok -= 1;
      }
      const A = Math.floor(Rok / 100);
      const b = 2 - A + Math.floor(A / 4);
      let jdp =
        Math.floor(365.25 * (Rok + 4716)) +
        Math.floor(30.6001 * (Miesiac + 1)) +
        Dzien +
        b +
        (godzina + min / 60 + sec / 3600) / 24 -
        1524.5;
      jdp = jdp;
      let tzd = (jdp - 2451545) / 36525;
      let elm = rang(
        297.8502042 +
          445267.1115168 * tzd -
          0.00163 * tzd * tzd +
          (tzd * tzd * tzd) / 545868 -
          (tzd * tzd * tzd * tzd) / 113065000
      );
      let ams = rang(
        357.5291092 +
          35999.0502909 * tzd -
          0.0001536 * tzd * tzd +
          (tzd * tzd * tzd) / 24490000
      );
      let aml = rang(
        134.9634114 +
          477198.8676313 * tzd -
          0.008997 * tzd * tzd +
          (tzd * tzd * tzd) / 69699 -
          (tzd * tzd * tzd * tzd) / 14712000
      );
      let asd =
        180 -
        elm -
        6.289 * Math.sin((Math.PI / 180) * aml) +
        2.1 * Math.sin((Math.PI / 180) * ams) -
        1.274 * Math.sin((Math.PI / 180) * (2 * elm - aml)) -
        0.658 * Math.sin((Math.PI / 180) * (2 * elm)) -
        0.214 * Math.sin((Math.PI / 180) * (2 * aml)) -
        0.11 * Math.sin((Math.PI / 180) * elm);
      let phi1 = (1 + Math.cos((Math.PI / 180) * asd)) / 2;

      tzd = (jdp + 0.5 / 24 - 2451545) / 36525;
      elm = rang(
        297.8502042 +
          445267.1115168 * tzd -
          0.00163 * tzd * tzd +
          (tzd * tzd * tzd) / 545868 -
          (tzd * tzd * tzd * tzd) / 113065000
      );
      ams = rang(
        357.5291092 +
          35999.0502909 * tzd -
          0.0001536 * tzd * tzd +
          (tzd * tzd * tzd) / 24490000
      );
      aml = rang(
        134.9634114 +
          477198.8676313 * tzd -
          0.008997 * tzd * tzd +
          (tzd * tzd * tzd) / 69699 -
          (tzd * tzd * tzd * tzd) / 14712000
      );
      asd =
        180 -
        elm -
        6.289 * Math.sin((Math.PI / 180) * aml) +
        2.1 * Math.sin((Math.PI / 180) * ams) -
        1.274 * Math.sin((Math.PI / 180) * (2 * elm - aml)) -
        0.658 * Math.sin((Math.PI / 180) * (2 * elm)) -
        0.214 * Math.sin((Math.PI / 180) * (2 * aml)) -
        0.11 * Math.sin((Math.PI / 180) * elm);
      let phi2 = (1 + Math.cos((Math.PI / 180) * asd)) / 2;

      if (phi2 - phi1 < 0) {
        phi1 = -1 * phi1;
      }
      return 100 * phi1;
    }

    moonPhase = faza(Rok, Miesiac, Dzien, Godzine, Min, Sekunde);
    const moonPhaseEmojis = ['🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕'];
    let moonPhaseIndex = Math.floor((moonPhase + 100) / 25);

    if (moonPhaseIndex >= 8) {
      moonPhaseIndex = 7;
    }

    return moonPhaseEmojis[moonPhaseIndex];
  };

  const renderMoonPhaseForSelectedDate = () => {
    const moonPhaseEmoji = calculateMoonPhase(selectedDate);
    let moonPhaseText = '';

    if (moonPhase >= 99 || moonPhase <= -99) {
      moonPhaseText = 'Full Moon';
    }
    if (moonPhase <= 1 && moonPhase >= -1) {
      moonPhaseText = 'New Moon';
    }
    if (moonPhase >= 40 && moonPhase <= 60) {
      moonPhaseText = 'First Quarter Moon';
    }
    if (moonPhase >= -60 && moonPhase <= -40) {
      moonPhaseText = 'Third Quarter Moon';
    }
    console.log(moonPhaseText);
    return (
      <div className="moon-phase">
        <div className="moon-emoji">{moonPhaseEmoji}</div>
        <div className="moon-text">{moonPhaseText}</div>
        <div className="moon-date">
          {selectedDate.getDate()}{' '}
          {String(selectedDate.getMonth() + 1).padStart(2, '0')}
        </div>
      </div>
    );
  };

  return (
    <div className="moon-phases-container">
      <h1>Fazy księżyca</h1>
      <div className="moon-phases">{renderMoonPhaseForSelectedDate()}</div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          label="Select a date"
          value={selectedDate}
          onChange={setSelectedDate}
          TextField={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
