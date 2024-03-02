"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentType = exports.runtime = void 0;
const og_1 = require("next/og");
exports.runtime = 'edge';
exports.contentType = 'image/png';
function generateOgImage({ props, }) {
    const { width, height, debug, children, emoji, className } = props;
    return new og_1.ImageResponse(<div className={className}>{children}</div>, {
        width,
        height,
        debug,
        emoji,
    });
}
exports.default = generateOgImage;
