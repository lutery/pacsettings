var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)google\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)vpnhot\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)opencv\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)sourceforge\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)google\.com\./.test(host)) return "+proxy";
        if (/(?:^|\.)qt\.io$/.test(host)) return "+proxy";
        if (/(?:^|\.)github\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)teamviewer\.com$/.test(host)) return "+proxy";
        return "DIRECT";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^[^:]+:\/\/::1\//.test(url) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 127.0.0.1:10800; SOCKS 127.0.0.1:10800";
    }
});