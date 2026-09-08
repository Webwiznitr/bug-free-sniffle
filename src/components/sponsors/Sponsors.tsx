import Image from 'next/image';

import { sponsorAssets, sponsorTiers } from '@/config/sponsors';
import type { Sponsor, SponsorTier } from '@/config/sponsors';

/**
 * Cassette geometry comes straight from the Figma frame, where the tape is
 * 345.84px wide. Every inner measurement is expressed in `em` against that
 * width, and the root font-size is derived from the container width — so the
 * tape keeps identical proportions from a 320px phone up to desktop rather
 * than needing a separate mobile layout.
 */
const CASSETTE_EM = 'calc(100cqw / 21.615)'; // 345.84px / 16px per em

function Cassette({
  tier,
  sponsor,
  flip,
}: {
  tier: SponsorTier;
  sponsor?: Sponsor;
  flip: boolean;
}) {
  const tape = (
    <div
      className={`${flip ? 'rotate-3' : '-rotate-3'} flex aspect-[345.84/207.24] w-full flex-col rounded-[0.66em] border-[0.33em] border-black p-[1.32em] drop-shadow-[0.495em_0.495em_0px_black]`}
      style={{ fontSize: CASSETTE_EM, backgroundColor: tier.shell }}
    >
      {/* min-h-0 all the way down: without it a flex item's automatic minimum
          size lets a tall logo push past the cassette's fixed aspect ratio. */}
      <div className="bg-background flex min-h-0 flex-1 flex-col gap-[0.6613em] rounded-[0.495em] border-[0.2475em] border-black px-[0.9075em] pt-[0.9075em] pb-[0.9075em]">
        <div className="text-foreground font-press-start flex h-[1.485em] shrink-0 items-center justify-between border-b-[0.165em] border-dashed border-black/60 pb-[0.495em] text-[0.66em] leading-[1.5]">
          <span>{tier.cassetteLabel}</span>
          <span>{tier.runtime}</span>
        </div>

        {/* Tape window — where a sponsor's logo sits. */}
        <div className="bg-background flex min-h-0 flex-1 items-center justify-center rounded-[0.6875em] border-[0.0625em] border-black p-[0.75em]">
          {sponsor && (
            <Image
              src={sponsor.logo}
              alt={sponsor.alt ?? `${sponsor.name} — ${tier.label}`}
              width={sponsor.width}
              height={sponsor.height}
              /* Logos range from 1:1 to ~4.8:1, so cap both axes and let
                 object-contain fit each one rather than sizing on one axis. */
              className="max-h-full max-w-full object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );

  return (
    <li className="@container list-none">
      {sponsor ? (
        <a
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label={sponsor.name}
          className="block transition-transform duration-200 hover:scale-[1.03]"
        >
          {tape}
        </a>
      ) : (
        tape
      )}
    </li>
  );
}

function Sponsors() {
  return (
    <section
      id="sponsors"
      className="bg-primary relative w-full overflow-hidden"
    >
      <div className="relative w-full overflow-hidden pt-10 md:pt-16">
        <Image
          src={sponsorAssets.heading}
          alt="Sponsors"
          width={2330}
          height={230}
          priority={false}
          /* Figma draws the waveform 2325px wide on a 1728px frame (~135%),
             overflowing evenly on both sides — same ratio at every breakpoint. */
          className="w-[135%] max-w-none -translate-x-[13%]"
        />
      </div>

      <div className="mx-auto flex max-w-[1728px] flex-col gap-14 px-[6vw] pt-6 pb-24 md:gap-20 md:px-16">
        {sponsorTiers.map((tier) => (
          <div key={tier.id} className="flex flex-col items-center">
            <h3 className="bg-background font-editorial text-foreground flex h-[2.65em] w-fit items-center justify-center rounded-full border-[2.6px] border-black px-[1.5em] text-[16px] font-extrabold tracking-[1.3px] underline shadow-[4px_4px_0px_0px_#000] [text-shadow:0px_5.2px_5.2px_rgba(0,0,0,0.25)] md:text-[26px]">
              {tier.label}
            </h3>

            <ul className="ssm:grid-cols-2 mt-9 grid w-full grid-cols-1 gap-x-8 gap-y-10 md:mt-12 lg:grid-cols-4">
              {Array.from({ length: tier.slots }, (_, i) => (
                <Cassette
                  key={`${tier.id}-${i}`}
                  tier={tier}
                  sponsor={tier.sponsors[i]}
                  flip={i % 2 === 1}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Image
        src={sponsorAssets.pixelEdge}
        alt=""
        aria-hidden="true"
        width={1728}
        height={120}
        className="h-auto w-full max-w-screen object-cover"
      />
    </section>
  );
}

export default Sponsors;
