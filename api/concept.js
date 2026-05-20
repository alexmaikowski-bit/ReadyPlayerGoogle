// Vercel serverless function — generates gaming activation concepts via Gemini 2.5 Flash.
// Requires GEMINI_API_KEY env var set in Vercel project settings.

const PA = {
  pixel: {
    name: 'Pixel',
    positioning: 'Where people cheer on the challenger mindset',
    audience: 'Millennial Seekers',
    index: 183,
    brand: '"Get Outside Your Comfort Phone" positions Pixel as the anti-vanilla challenger. 105% YoY premium growth. Tensor G5 leads on AI, not raw GPU — so the play is capture, create, and share. Zero gaming sponsorships today — total white space for Pixel.',
    examples: [
      { ring: 'clips', name: 'Clip Drop by Pixel', hookStat: '74% of gamers share clips.', description: 'Medal.tv (40M+ users) brands top clips "Clip Drop by Pixel." Livewire handles cross-platform distribution + measurement.', paRole: 'Game Dashboard recording + Tensor AI highlight curation', partnerTag: 'Medal.tv + Livewire', formatTag: 'Always-On', budget: 2 },
      { ring: 'clips', name: 'Your Year, Replayed', hookStat: 'Gaming has no Spotify Wrapped.', description: 'Pixel AI generates your year in review — hours, clips, clutch moments. Distributed via IGN + Dexerto.', paRole: 'On-device Tensor compiles play data into shareable cards', partnerTag: 'IGN + Dexerto', formatTag: 'Tentpole · Q4', budget: 3 },
      { ring: 'streaming', name: 'The Underdog Invitational', hookStat: '67% of fans root for underdogs.', description: 'Open-qualifier tournament. Night Media + FaZe for talent and cultural reach. YouTube Gaming stream.', paRole: 'Presenting sponsor + Gemini generates post-match highlights', partnerTag: 'Night Media + FaZe', formatTag: 'Tentpole Series', budget: 4 },
      { ring: 'streaming', name: 'Second Screen, Main Character', hookStat: '87% use a second device while playing.', description: 'Pixel as streamer co-pilot: facecam, Gemini chat mod, clip capture. Playwire distributes via Enthusiast Gaming.', paRole: 'Camera + Gemini + Game Dashboard live on stream', partnerTag: 'Creators + Playwire', formatTag: 'Always-On', budget: 2 },
      { ring: 'live', name: 'Pixel Photo Lab', hookStat: 'Photo modes = #1 shared social feature in games.', description: 'Fortnite Creative map around photography challenges. Virtual Pixel camera + AI filters. Livewire measures brand lift.', paRole: 'Virtual Pixel camera IS the gameplay mechanic', partnerTag: 'Fortnite + Livewire', formatTag: 'Tentpole', budget: 4 },
      { ring: 'live', name: 'The Challenger Skin', hookStat: 'Cosmetics = $50B+ market.', description: 'Pixel × 100 Thieves co-branded skin. Glitch aesthetic, Google colors. Supercell Brawl Stars mobile drop.', paRole: '"Challenger" identity worn by millions of players', partnerTag: '100 Thieves + Riot + Supercell', formatTag: 'Limited Drop', budget: 3 }
    ]
  },
  chrome: {
    name: 'Chrome',
    positioning: 'Where people explore and get things done',
    audience: 'Adults 18-44',
    index: 155,
    brand: 'WebGPU delivers 10x rendering gains — AAA browser games are now real. Gemini lives in Chrome\'s side panel. Auto Browse (Jan 2026) turns Chrome into an autonomous browsing agent. 3.5B users. Chrome isn\'t a portal to games — it IS the platform.',
    examples: [
      { ring: 'clips', name: 'Never Alt-Tab Again', hookStat: 'Gamers alt-tab 56 times per session.', description: 'Shorts via IGN + Fandom showing Gemini side panel replacing alt-tab for builds, counters, and lore mid-game.', paRole: 'Gemini side panel visible on screen, answering in real-time', partnerTag: 'IGN + Fandom', formatTag: 'Always-On', budget: 2 },
      { ring: 'clips', name: 'Patch Notes, Translated', hookStat: 'Average patch note: 3,000+ words.', description: 'Chrome AI drops 30-second summaries on patch day. Distributed via Valnet (GameRant, Polygon) + Enthusiast Gaming. Playwire monetizes.', paRole: 'AI summarization — branded "Summarized by Chrome"', partnerTag: 'Valnet + Enthusiast + Playwire', formatTag: 'Always-On', budget: 2 },
      { ring: 'streaming', name: 'The Strategy Room', hookStat: '40% of stream viewership = strategy/RPG.', description: 'Chrome + Gemini overlay for Activision Blizzard titles (WoW, Diablo IV) and Supercell strategy games.', paRole: 'Gemini side panel IS the stream\'s brain — visible to viewers', partnerTag: 'Streamers + Activision', formatTag: 'Sponsored', budget: 3 },
      { ring: 'streaming', name: 'Wiki Race', hookStat: 'Gaming wikis: 1B+ monthly visits.', description: 'Competitive game show: Chrome + Gemini vs. the old way. Fandom provides questions. Enthusiast Gaming\'s U.GG for LoL challenges.', paRole: 'Chrome + Gemini IS the competitive advantage', partnerTag: 'Fandom + Enthusiast', formatTag: 'Recurring', budget: 2 },
      { ring: 'live', name: 'Chrome Arcade', hookStat: 'WebGPU = 10x rendering.', description: 'Permanent Chrome Arcade with rotating indie games, playable in one click. Physical installation at DreamHack. AppLovin AXON for UA.', paRole: 'WebGPU powers every game — no downloads, just Chrome', partnerTag: 'itch.io + AppLovin', formatTag: 'Evergreen', budget: 3 },
      { ring: 'live', name: 'The Loading Screen', hookStat: '26 hrs/year on loading screens.', description: 'Anzu + Livewire across Activision + Supercell titles. Chrome AI tips served in dead time. Unity Ads for mobile inventory.', paRole: 'Chrome AI features shown in-context between rounds', partnerTag: 'Anzu + Livewire + Unity', formatTag: 'Always-On', budget: 2 }
    ]
  },
  cloud: {
    name: 'Cloud',
    positioning: 'Where decision makers seek guidance',
    audience: 'BDMs',
    index: 151,
    brand: '"Living Games" from GDC 2026 — games that breathe, react, and grow with the player. Genie 3 demoed AI-generated 3D worlds. Real partners: Sony (Spanner), Capcom (Vertex AI), Klang (autonomous NPCs), Activision Blizzard. Cloud Next tagline: "Here\'s How."',
    examples: [
      { ring: 'clips', name: 'Server Room', hookStat: '73% of live-service failures = infrastructure.', description: 'YouTube docuseries following studios through launches on Google Cloud. Distributed via IGN. Fandom hosts companion deep-dives.', paRole: 'GKE Autopilot + Agones auto-scaling IS the hero of every episode', partnerTag: 'YouTube + IGN + Fandom', formatTag: 'Quarterly', budget: 4 },
      { ring: 'clips', name: 'The 99.99% Club', hookStat: 'Diablo IV: 10M players in 5 days.', description: 'Uptime = the game\'s first review. Live dashboards validated by Newzoo. Covered by Valnet + Dexerto. Studios that hit 99.99% earn the badge.', paRole: 'Google Cloud infrastructure delivers the uptime — the badge certifies it', partnerTag: 'Newzoo + Valnet + Dexerto', formatTag: 'Event-Triggered', budget: 2 },
      { ring: 'streaming', name: 'Backend Speedrun', hookStat: 'Games Done Quick raises $50M+ through speedruns.', description: 'Live from GDC: devs race to build a multiplayer backend on Google Cloud in 60 minutes. Enthusiast Gaming\'s Pocket Gamer Connects hosts mobile heat.', paRole: 'GKE, Spanner, Vertex AI deployed live on stage', partnerTag: 'GDC + Enthusiast', formatTag: 'Annual', budget: 3 },
      { ring: 'streaming', name: 'Moneyball for Esports', hookStat: 'League Worlds: 6.94M concurrent.', description: 'Vertex AI powers real-time analytics on esports broadcasts — draft predictions, economy analysis, win probability. Activision\'s CoD League as second surface.', paRole: 'Vertex AI models — branded "Powered by Google Cloud" overlays', partnerTag: 'Broadcasters + Activision', formatTag: 'Season-Long', budget: 4 },
      { ring: 'live', name: 'Living Games Showcase', hookStat: '"Living Games" = Cloud\'s own GDC 2026 narrative.', description: 'Co-produce with Klang, Parallel, nunu.ai — titles where AI content regenerates weekly. Playable at Cloud Next. Covered by IGN.', paRole: 'Vertex AI + GKE power the regenerating content', partnerTag: 'Klang + Parallel + IGN', formatTag: 'Annual', budget: 4 },
      { ring: 'live', name: 'The Fair Play Alliance', hookStat: '77% of gamers say cheating ruined a game.', description: 'Cloud AI anti-cheat across Activision + Supercell. Newzoo validates impact. Public dashboard. "Google Cloud protects fair play."', paRole: 'Vertex AI detection models = the anti-cheat backbone', partnerTag: 'Activision + Supercell + Newzoo', formatTag: 'Evergreen', budget: 3 }
    ]
  },
  gemini: {
    name: 'Gemini',
    positioning: 'Where people create',
    audience: 'Adults 18-29',
    index: 153,
    brand: 'Google I/O 2026 demoed Gemini-built playable games live on stage. Flow merges image, video, and audio generation into one creative suite. Vibe coding is the fastest-growing search on YouTube Tech. 750M+ MAU. The distance between imagining something and making it is now zero.',
    examples: [
      { ring: 'clips', name: 'Made With Gemini', hookStat: '65% of Gen Z identify as creators.', description: 'Challenge: use Gemini (Flow + Canvas + ImageFX) to make gaming content that doesn\'t exist. Winners featured on IGN + Dexerto. Fandom hosts gallery.', paRole: 'Flow + Canvas + ImageFX — "Made With Gemini" watermark', partnerTag: 'IGN + Dexerto + Fandom', formatTag: 'Recurring', budget: 3 },
      { ring: 'clips', name: '60-Second Game Dev', hookStat: 'I/O 2026: Gemini built playable games live on stage.', description: 'Shorts challenge: one prompt, one minute, one playable game. Valnet covers the best creations. AppLovin AXON for playable link UA.', paRole: 'Gemini Canvas vibe-coding = the entire mechanic', partnerTag: 'Valnet + AppLovin', formatTag: 'Viral Challenge', budget: 2 },
      { ring: 'streaming', name: 'Mod Season', hookStat: 'Modding drives 40% of playtime in Skyrim/Minecraft.', description: 'Two-week event with Overwolf (30M+ MAU). Target Activision\'s WoW modding community via Enthusiast\'s Icy-Veins. Playwire monetizes.', paRole: 'Gemini writes Lua, generates textures, debugs code', partnerTag: 'Overwolf + Enthusiast + Playwire', formatTag: 'Seasonal', budget: 3 },
      { ring: 'streaming', name: 'The Infinite Campaign', hookStat: 'Critical Role: 1B+ YouTube views.', description: '#1 barrier to D&D = finding a DM. Never-ending campaign streamed live — Gemini Live as AI DM. FaZe/100T creators as guest players for crossover episodes.', paRole: 'Gemini Live IS the Dungeon Master — real-time generation', partnerTag: 'TTRPG Creators + FaZe/100T', formatTag: 'Recurring', budget: 3 },
      { ring: 'live', name: 'Describe-to-Build', hookStat: 'Roblox: 80M+ DAU.', description: 'Creation requires Studio + Lua. Type one sentence → Gemini + Genie 3 builds a world in real-time. Walk through it. Weekly leaderboard. Livewire measures. IGN features best worlds.', paRole: 'Gemini interprets + Genie 3 generates — "Powered by Gemini"', partnerTag: 'Roblox + Genie 3 + Livewire + IGN', formatTag: 'Evergreen', budget: 4 },
      { ring: 'live', name: 'The NPCs Remember', hookStat: 'NPCs have said the same lines since 2011.', description: 'Inworld AI + Gemini power NPCs that remember, adapt, and evolve. Pilot with Activision title. Newzoo validates engagement lift.', paRole: 'Gemini models power NPC memory — co-branded "Gemini Inside"', partnerTag: 'Inworld + Activision + Newzoo', formatTag: 'Partnership', budget: 4 }
    ]
  },
  search: {
    name: 'Search',
    positioning: 'Where people seek information',
    audience: 'Adults 18-34',
    index: 148,
    brand: 'Circle to Search on 580M+ devices. 25B+ Lens queries/month. "Polytrack" went from 0 to 823K monthly searches in 12 months. 46% of Gen Z search social first — but 64% verify on Google. Search is the truth layer. Gaming is where it proves that to the audience most at risk of leaving.',
    examples: [
      { ring: 'clips', name: 'What Gamers Search', hookStat: '"DDR5 RAM" surged 398% YoY.', description: 'Quarterly culture reports co-branded with Newzoo. Distributed via IGN, Valnet (Polygon, GameRant), and Dexerto. Search saw it before anyone.', paRole: 'Google Trends data IS the content — culture\'s early warning system', partnerTag: 'Newzoo + IGN + Valnet + Dexerto', formatTag: 'Quarterly', budget: 2 },
      { ring: 'clips', name: 'Circle the Clue', hookStat: 'Easter egg hunting: gaming\'s oldest tradition (Atari, 1979).', description: 'Creators use Circle to Search mid-gameplay. Fandom hosts definitive guides. Activision + Supercell plant hidden clues.', paRole: 'Circle to Search + Lens ARE the gameplay tool', partnerTag: 'Fandom + Activision + Supercell', formatTag: 'Always-On + Drops', budget: 3 },
      { ring: 'streaming', name: 'The Proof Layer', hookStat: '64% of Gen Z verify on Google.', description: 'Search Lift as first-party measurement for all gaming activations. Newzoo co-validates methodology. Livewire integrates into Gameview reporting.', paRole: 'Search Lift = the first-party proof standard for every activation', partnerTag: 'Newzoo + Livewire', formatTag: 'Always-On', budget: 2 },
      { ring: 'streaming', name: 'The Ticker', hookStat: 'NFL Next Gen Stats transformed football.', description: 'Real-time Google Trends ticker on esports broadcasts + Activision\'s Call of Duty League. What viewers search during matches.', paRole: 'Google Trends data feeds the ticker — "Powered by Google Search"', partnerTag: 'Broadcasters + Activision', formatTag: 'Season-Long', budget: 3 },
      { ring: 'live', name: 'Search to Solve', hookStat: 'The search bar = most universal UX on earth.', description: 'Fortnite Creative map + Supercell Clash quiz powered by AI Overviews. Searching IS the gameplay mechanic. Livewire measures engagement.', paRole: 'AI Overviews power every in-game answer', partnerTag: 'Fortnite + Supercell + Livewire', formatTag: 'Tentpole', budget: 4 },
      { ring: 'live', name: 'Day One', hookStat: '78% of gamers search within 24 hours of launch.', description: '"Day One by Google Search" for Activision CoD + Supercell updates. Custom AI Overview cards, rich panels, countdowns. IGN + Fandom editorial tie-ins.', paRole: 'AI Overviews + rich panels + AI Mode customized per title', partnerTag: 'Activision + Supercell + IGN + Fandom', formatTag: 'Event-Triggered', budget: 3 }
    ]
  }
};

const RING_LABEL = { clips: 'Clips + Reactions', streaming: 'Streaming + Chatting', live: 'Live Playable Games' };

function buildPrompt(pa, mode, anchor, ringFilter, cardName) {
  const ctx = PA[pa];
  const examplesBlock = ctx.examples.map(e =>
    `- [${RING_LABEL[e.ring]}] "${e.name}" — ${e.hookStat} ${e.description} | ${ctx.name}'s role: ${e.paRole} | Partners: ${e.partnerTag} | Format: ${e.formatTag} | Budget: ${e.budget}/4`
  ).join('\n');

  const anchorLine = anchor && anchor.trim() ? `\n\nANCHOR (this is the constraint to build around): "${anchor.trim()}"` : '';

  const TIMING_RULE = 'TIMING: Today is May 2026. Any future-tense reference (tentpole quarter, launch window, tournament season, year-in-review, etc.) must use 2026 or 2027. Never reference 2024 or 2025 as a future date. Never use "Q3 2025" or similar — use "Q4 2026", "Q1 2027", "Spring 2027", etc.';

  if (mode === 'riff') {
    const ringName = RING_LABEL[ringFilter] || 'Clips + Reactions';
    return `You are pitching a fresh "${ringName}" activation concept for ${ctx.name} to Google's marketing leadership.

${ctx.name} positioning: ${ctx.positioning}
Audience: ${ctx.audience} (${ctx.index} index)
Brand context: ${ctx.brand}

${TIMING_RULE}

Existing concepts on the deck (for voice + structural reference — do NOT duplicate):
${examplesBlock}${anchorLine}

The existing concept being riffed is "${cardName || 'one of the above'}". Generate ONE new concept in the same ring (${ringName}) that's a fresh angle — not a remix of the existing one. It must:
- Lead with a real-feeling behavioral stat or cultural fact (the "hookStat")
- Name 1–4 real partners (gaming platforms, creator orgs, measurement cos, publishers, ad-tech)
- State ${ctx.name}'s specific product role
- Be one ring only: ${ringName}
- Match the punchy, no-fluff, media-strategist voice
- Use 2026/2027 framing only

Return ONE card in the cards array.`;
  }

  // mode === 'set'
  return `You are pitching three fresh gaming activation concepts for ${ctx.name} to Google's marketing leadership — one per ring.

${ctx.name} positioning: ${ctx.positioning}
Audience: ${ctx.audience} (${ctx.index} index)
Brand context: ${ctx.brand}

${TIMING_RULE}

Existing concepts on the deck (for voice + structural reference — do NOT duplicate):
${examplesBlock}${anchorLine}

Generate THREE new concepts — one for each ring:
1. Clips + Reactions (ring: "clips") — the surround sound of gaming culture (creator content, editorial, programmatic, social)
2. Streaming + Chatting (ring: "streaming") — live streams, broadcasts, esports, creator tools, community
3. Live Playable Games (ring: "live") — in-game integrations, branded worlds, skins, playable activations

Each concept must:
- Lead with a real-feeling behavioral stat or cultural fact (the "hookStat")
- Name 1–4 real partners (gaming platforms, creator orgs, measurement cos, publishers, ad-tech)
- State ${ctx.name}'s specific product role
- Match the punchy, no-fluff, media-strategist voice
- Be net-new — different angles than the existing six
- Use 2026/2027 framing only

Return three cards in the cards array, one per ring, in order: clips, streaming, live.`;
}

const responseSchema = {
  type: 'object',
  properties: {
    cards: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          ring: { type: 'string', enum: ['clips', 'streaming', 'live'] },
          name: { type: 'string', description: '1–4 word punchy concept name, title case' },
          budget: { type: 'integer', minimum: 1, maximum: 4, description: '1=lean/always-on, 4=tentpole' },
          hookStat: { type: 'string', description: 'Opening sentence — a behavioral stat or cultural fact, bolded in render' },
          description: { type: 'string', description: '1–2 sentences after the hookStat explaining the activation, named partners inline' },
          paRole: { type: 'string', description: 'Specific Google product role — one short clause' },
          partnerTag: { type: 'string', description: '1–3 real partners joined by " + ", e.g. "Medal.tv + Livewire"' },
          formatTag: { type: 'string', description: 'Cadence/format, e.g. "Always-On", "Tentpole · Q4", "Recurring"' }
        },
        required: ['ring', 'name', 'budget', 'hookStat', 'description', 'paRole', 'partnerTag', 'formatTag']
      }
    }
  },
  required: ['cards']
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });
  }

  const { pa, mode = 'set', anchor = '', ringFilter, cardName } = req.body || {};
  if (!PA[pa]) {
    return res.status(400).json({ error: 'Unknown product area' });
  }
  if (mode === 'riff' && !['clips', 'streaming', 'live'].includes(ringFilter)) {
    return res.status(400).json({ error: 'Riff mode requires ringFilter: clips | streaming | live' });
  }

  const prompt = buildPrompt(pa, mode, anchor, ringFilter, cardName);

  try {
    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + encodeURIComponent(key), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 1.0,
          maxOutputTokens: 4096,
          responseMimeType: 'application/json',
          responseSchema,
          thinkingConfig: { thinkingBudget: 0 }
        }
      })
    });

    if (!r.ok) {
      const errText = await r.text();
      return res.status(502).json({ error: 'Gemini call failed', detail: errText.slice(0, 500) });
    }

    const data = await r.json();
    const textOut = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!textOut) {
      return res.status(502).json({ error: 'Gemini returned empty response', detail: JSON.stringify(data).slice(0, 500) });
    }

    let parsed;
    try { parsed = JSON.parse(textOut); }
    catch (e) { return res.status(502).json({ error: 'Gemini returned non-JSON', detail: textOut.slice(0, 500) }); }

    if (!parsed.cards || !Array.isArray(parsed.cards)) {
      return res.status(502).json({ error: 'Malformed cards response' });
    }

    return res.status(200).json({ cards: parsed.cards });
  } catch (e) {
    return res.status(500).json({ error: 'Server error', detail: String(e).slice(0, 500) });
  }
}
