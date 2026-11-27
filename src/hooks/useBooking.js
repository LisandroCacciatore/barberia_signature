import { useState, useMemo } from 'react';
import { bookingServices, bookingAddons, bookingBarbers, bookingDates, bookingAfternoonSlots } from '../data/booking.js';

export function useBooking() {
  const [serviceId, setServiceId] = useState(bookingServices[0]?.id);
  const [barberId, setBarberId] = useState(bookingBarbers[0]?.id);
  const [dateId, setDateId] = useState(
    bookingDates.find((d) => d.selected)?.date || bookingDates[0]?.date
  );
  const [time, setTime] = useState(
    bookingAfternoonSlots.find((t) => t.selected)?.time ||
      bookingAfternoonSlots[0]?.time
  );
  const [addons, setAddons] = useState(
    new Set(
      bookingAddons
        .filter((a) => a.defaultChecked)
        .map((a) => a.id)
    )
  );
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
  const addonsTotal = useMemo(
    () =>
      bookingAddons
        .filter((a) => addons.has(a.id))
        .reduce((sum, a) => sum + a.price, 0),
    [addons]
  );
  const total = (service?.price || 0) + addonsTotal;

  return {
    services: bookingServices,
    service,
    serviceId,
    setServiceId,
    barbers: bookingBarbers,
    barber,
    barberId,
    setBarberId,
    dates: bookingDates,
    dateId,
    setDateId,
    time,
    setTime,
    addons,
    toggleAddon: (id) =>
      setAddons((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
      }),
    addonsTotal,
    total,
    customer,
    updateCustomer: (field, value) =>
      setCustomer((prev) => ({ ...prev, [field]: value })),
  };
}
