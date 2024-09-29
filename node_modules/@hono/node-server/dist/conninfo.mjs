// src/conninfo.ts
var getConnInfo = (c) => {
  const bindings = c.env.server ? c.env.server : c.env;
  const address = bindings.incoming.socket.address();
  if (!("address" in address)) {
    return {
      remote: {}
    };
  }
  return {
    remote: {
      address: address.address,
      addressType: address.family === "IPv4" ? "IPv4" : address.family === "IPv6" ? "IPv6" : "unknown",
      port: address.port
    }
  };
};
export {
  getConnInfo
};
