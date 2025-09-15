const isValidIPv4 = (ip) => {
  const octets = ip.split('.');
  if (octets.length !== 4) return false;
  return octets.every(
    (octet) => parseFloat(octet) < 255 && octet === parseFloat(octet).toString()
  );
};

module.exports = isValidIPv4;
