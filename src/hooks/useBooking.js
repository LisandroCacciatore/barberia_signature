import { useState, useMemo } from 'react';
import { bookingServices, bookingBarbers, bookingDates } from '../data/booking.js';

export function useBooking() {
  const [serviceId, setServiceId] = useState(bookingServices[0]?.id || '');
  const [barberId, setBarberId] = useState(bookingBarbers[0]?.id || '');
  const [dateId, setDateId] = useState(() => {
    const avail = bookingDates.find((d) => d.available);
    return avail ? avail.date : bookingDates[0]?.date || '';
  });
  const [time, setTime] = useState('');
  const [addons, setAddons] = useState(new Set());
  const [customer, setCustomer] = useState({
    nombre: '',
    email: '',
    telefono: '',
    bebida: '',
    notas: '',
    consent: false,
  });

  const service = useMemo(
    () => bookingServices.find((s) => s.id === serviceId) || bookingServices[0],
    [serviceId]
  );

  const barber = useMemo(
    () => bookingBarbers.find((b) => b.id === barberId) || bookingBarbers[0],
    [barberId]
  );

  const ADDON_PRICES = { wash: 5000, eyes: 6500 };

  const addonsTotal = useMemo(() => {
    let total = 0;
    addons.forEach((id) => { total += ADDON_PRICES[id] || 0; });
    return total;
  }, [addons]);

  const total = (service?.price || 0) + addonsTotal;

  function toggleAddon(id) {
    setAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function updateCustomer(field, value) {
    setCustomer((prev) => ({ ...prev, [field]: value }));
  }

  return {
    services: bookingServices,
    barbers: bookingBarbers,
    dates: bookingDates,
    serviceId, setServiceId,
    barberId, setBarberId,
    dateId, setDateId,
    time, setTime,
    addons, toggleAddon,
    addonsTotal,
    customer, updateCustomer,
    service,
    barber,
    total,
  };
}

