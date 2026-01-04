import satori from 'satori';
import { html } from 'satori-html';
import { readFileSync } from 'fs';
import path from 'path';
import {Resvg} from '@resvg/resvg-js';

const font = readFileSync('static/assets/fonts/Inter-Bold.ttf');

const logoSvg = readFileSync(
	path.resolve('static/assets/logo/ori-dark.svg'),
	'utf-8'
);

const bgBuffer = readFileSync(
  path.resolve('static/assets/ogBackground.png')
);
const bgBase64 = bgBuffer.toString('base64');

export const GET = async ({ url }) => {
	const title = url.searchParams.get("title") ?? "Ori UI";
    const description = url.searchParams.get("description") ?? "Svelte Components";
    console.log("Satori start")
	const svg = await satori(
        html(`
        <div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:30px;background-color:#0a0a0a;color:#fff;width:1200px;height:630px;padding:60px;font-family:Inter;">
            <div style="display:flex;position:relative;flex-direction:column;width:50%;justify-content:center;align-items:flex-start;gap:20px;height:100%;">
                <div style="font-size:54px;font-weight:700;">${title}</div>
                <div style="font-size:22px;opacity:0.7;">${description}</div>
                <div style="display:flex;position:absolute;bottom:0px;left:0px;gap:10px;align-items:center;justify-content:flex-start;width:100%;">
                    <div style="display:flex;width:40px;height:40px;">${logoSvg}</div>
                    <div style="font-size:12px;opacity:0.7;white-space:nowrap;">Ori UI Component</div>
                </div>
            </div>
            <div style="display:flex;flex-direction:row;justify-content:flex-end;gap:20px;align-items:flex-end;width:50%;">
                <div style="display:flex;gap:20px;flex-direction:column;justify-content:flex-end;align-items:flex-end;">
                    <div style="width:200px;height:200px;background-color:#3a3a3a;display:flex;border-radius:12px;"></div>
                    <div style="width:200px;height:190px;background-color:#3a3a3a;display:flex;border-radius:12px;"></div>
                    <div style="width:200px;height:170px;background-color:#3a3a3a;display:flex;border-radius:12px;"></div>
                </div>
                <div style="display:flex;gap:20px;flex-direction:column;justify-content:flex-end;align-items:flex-end;">
                    <div style="width:200px;height:170px;background-color:#3a3a3a;display:flex;border-radius:12px;"></div>
                    <div style="width:200px;height:200px;background-color:#3a3a3a;display:flex;border-radius:12px;"></div>
                    <div style="width:200px;height:190px;background-color:#3a3a3a;display:flex;border-radius:12px;"></div>
                </div>
            </div>
        </div>
        `),
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: 'Inter',
					data: font,
					weight: 700
				}
			]
		}
	);
    console.log("Satori done")

    const png = new Uint8Array(
        new Resvg(svg, { fitTo: { mode: 'width', value: 1200}}).render().asPng()
    )

	return new Response(png, {
		headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable'
        }
	});
};
