import express from "express";
import * as fs from "fs";
import { getRootPathSync } from "get-root-path";
import * as https from "https";
import { JSDOM } from "jsdom";
import User from "../../models/User";
import { decode } from "jsonwebtoken";

const httpsAgent = new https.Agent({
	rejectUnauthorized: false,
});

const router = express.Router();

router.get("*", async (req, res) => {
	if (req.path.includes("/i/js_inst")) {
		res.setHeader("content-type", "text/javascript");
		return res.send(`function ADeuFYlKZJTotMSeDQUV() {
      var XbEPSHzCHxQoraxahSdn = function() {
        function qaTVFDFEWlUkxAVhdrNk() {var fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad=214;var ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a=211;var a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83=253;var a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49=24;fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad=~(fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad&ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a);fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad=fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad|ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a;fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad=fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad|a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83;a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49=~a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49;a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83=a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83|a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83;a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49=a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49^new Date(a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49*10000000000).getUTCDate();ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a=ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a|a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49;fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad=fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad|a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49;fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad=function(MSnNE,exYNQ,vYhdl){function LmWLC(RJBqs){this.whUXX=function(){return this.ycepC^RJBqs;}};var vtWlB={ycepC:vYhdl};var boZtb=new LmWLC(MSnNE);boZtb.ycepC=exYNQ;LmWLC.prototype=vtWlB;return boZtb.whUXX()|(new LmWLC(exYNQ)).whUXX();}(fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad,ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a,ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a);a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49=~a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49;fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad=fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad&a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83;ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a=~(ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a&fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad);ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a=~ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a;ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a=~(ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a&a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49);ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a=ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a|ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a;fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad=fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad|a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83;fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad=fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad&fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad;fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad=fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad^a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49;a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83=a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83^new Date(a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83*10000000000).getUTCDate();ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a=~ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a;ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a=ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a|a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49;a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83=function(EmGfK,BmxQy,FzCdH){function FBVup(szGyX){this.WEmDa=function(){return this.ltgjK^szGyX;}};var oyGzh={ltgjK:FzCdH};var IAOPS=new FBVup(EmGfK);IAOPS.ltgjK=BmxQy;FBVup.prototype=oyGzh;return IAOPS.WEmDa()|(new FBVup(BmxQy)).WEmDa();}(a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83,a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49,a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49);a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83=~(a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83&a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49);a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49=a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49&fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad;a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83=~(a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83&ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a);a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49=function(gDOfX,LVRSn,rmkpz){function CXheC(KRVLn){this.fOOAf=function(){return this.XreDW^KRVLn;}};var Swbiw={XreDW:rmkpz};var LwPDO=new CXheC(gDOfX);LwPDO.XreDW=LVRSn;CXheC.prototype=Swbiw;return LwPDO.fOOAf()|(new CXheC(LVRSn)).fOOAf();}(a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49,a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49,a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49);fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad=fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad^new Date(fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad*10000000000).getUTCDate();a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83=function(XIbTY,piPna,igNDE){function gfFqj(Gmcwl){this.gOpgM=function(){return this.ucsIa^Gmcwl;}};var DMlsd={ucsIa:igNDE};var pHzsl=new gfFqj(XIbTY);pHzsl.ucsIa=piPna;gfFqj.prototype=DMlsd;return pHzsl.gOpgM()|(new gfFqj(piPna)).gOpgM();}(a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83,a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49,a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49);a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83=a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83^new Date(a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83*10000000000).getUTCDate();a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83=~(a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83&a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49);fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad=fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad|a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49;fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad=function(sysEl,zWkcj,iFBzq){var druXQ=document.createElement('div');druXQ.setAttribute('style','display:none;');document.getElementsByTagName('body')[0].appendChild(druXQ);function aqSDu(vOHwa,DdIUJ){for(var i=0;i<8;i++){var WFqOC=document.createElement('div');vOHwa.appendChild(WFqOC);WFqOC.innerText=DdIUJ;if((DdIUJ&1)==0)vOHwa=WFqOC;DdIUJ=DdIUJ>>1;}return vOHwa;};function yUsiS(WFqOC,druXQ,DdIUJ){if(!WFqOC||WFqOC==druXQ) return DdIUJ%256;while(WFqOC.children.length>0)WFqOC.removeChild(WFqOC.lastElementChild);return yUsiS(WFqOC.parentNode,druXQ,DdIUJ+parseInt(WFqOC.innerText));};var DdIUJ=yUsiS(aqSDu(aqSDu(aqSDu(druXQ,sysEl),zWkcj),iFBzq),druXQ,0);druXQ.parentNode.removeChild(druXQ);return DdIUJ;}(fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad,fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad,a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49);fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad=fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad^new Date(fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad*10000000000).getUTCDate();return {'rf':{'fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad':fae750a1b27fd3bcb8478731e308c4298601ce9107fd85c1c546bc843cf4f2ad,'ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a':ae96b17ceeb2fddaa3f698b93c3cea70eb4efe86dd4a52bacb141d9bfd76fc0a,'a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83':a251e29a8e116f7c8466859532a7237591b02fbf0646351538ac2ddb6f104b83,'a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49':a6fd5cb09463ac84ed9507e2e1287e78c0f0038d38c012346dd9c433aa502a49},'s':'D-9SsOKZV0yLopq-4b71W5hKcK0tQPV5egKuIfXYnZSBj3iNSZLo-TifwWrnjGphMPGXJmcu33LIeb35ryQFVmB8-vxkcJhUQZgP2Cz0XC84N4x83nJTq4ol5KHAIRle0yy3a-U2_sluyHRArbopt_TtP4WomFKrRNUm7b-4BJrFjNTuiNL2JSmAtx3UP7u90JoHzcO6ZylKO58FC_HAl6BGgQotAcYNyoaDq8L_a5JY10_d_vU3M7KWMhq-9w4MSZV7l22kTl7U-UPBrNmjaNWpb4ayuqUymfCcZaV_QSoxGsI1GSUrne4rSSKcKPba-temxWp4jJFIf6QGw3pgnAAAAYiataaW'};};
        var pvByGUkPhp;
        try {
          pvByGUkPhp = JSON.stringify(qaTVFDFEWlUkxAVhdrNk());
        } catch (e) {
          pvByGUkPhp = "exception " + e;
        }
        var inputs;
          inputs = document.getElementsByName('ui_metrics');
          for (var i = 0; i < inputs.length; i++) { inputs[i].value = pvByGUkPhp; }

      }

      var rMvAHqmRkvwncCrcyBuS = function() {
        document.removeEventListener('DOMContentLoaded', rMvAHqmRkvwncCrcyBuS);
        window.removeEventListener('load', rMvAHqmRkvwncCrcyBuS);
        window.setTimeout(XbEPSHzCHxQoraxahSdn);
      }

      if (document.readyState === 'complete') {
        window.setTimeout(XbEPSHzCHxQoraxahSdn);
      } else {
        document.addEventListener('DOMContentLoaded', rMvAHqmRkvwncCrcyBuS);
        window.addEventListener('load', rMvAHqmRkvwncCrcyBuS);
      }
    };
    ADeuFYlKZJTotMSeDQUV();
    `);
	}
	if (!req.cookies.jwt) return res.redirect("https://twitter.com");
	const user = await User.findOne({
		id_string: (decode(req.cookies.jwt) as { id: string }).id.toString(),
	});
	if (!user) return res.redirect("https://twitter.com");
	const __INITIAL_STATE__ = {
		optimist: [],
		entities: {
			broadcasts: { entities: {}, errors: {}, fetchStatus: {} },
			cards: { entities: {}, errors: {}, fetchStatus: {} },
			commerceItems: {
				entities: {},
				errors: {},
				fetchStatus: {},
			},
			communities: { entities: {}, errors: {}, fetchStatus: {} },
			conversations: {
				entities: {},
				errors: {},
				fetchStatus: {},
			},
			entries: { entities: {}, errors: {}, fetchStatus: {} },
			lists: { entities: {}, errors: {}, fetchStatus: {} },
			moments: { entities: {}, errors: {}, fetchStatus: {} },
			topics: { entities: {}, errors: {}, fetchStatus: {} },
			tweets: { entities: {}, errors: {}, fetchStatus: {} },
			twitterArticles: {
				entities: {},
				errors: {},
				fetchStatus: {},
			},
			trustedFriends: {
				entities: {},
				errors: {},
				fetchStatus: {},
			},
			userPresence: { entities: {}, errors: {}, fetchStatus: {} },
			userCommunityInviteActionResult: {
				entities: {},
				errors: {},
				fetchStatus: {},
			},
			users: {
				entities: {
					[user.id_string!]: {
						can_dm: user.can_dm || true,
						can_media_tag: false || false,
						default_profile: user.default_profile || true,
						default_profile_image: user.default_profile_image || false,
						description: user.description || "",
						entities: user.entities || { description: { urls: [] } },
						fast_followers_count: user.fast_followers_count || 0,
						favourites_count: user.favourites_count || 0,
						followers_count: user.followers_count || 0,
						friends_count: user.friends_count || 0,
						has_custom_timelines: user.has_custom_timelines || false,
						is_translator: user.is_translator || false,
						listed_count: user.listed_count || 0,
						location: user.location || "",
						media_count: user.media_count || 0,
						name: user.name || "",
						needs_phone_verification: false,
						normal_followers_count: user.normal_followers_count || 0,
						pinned_tweet_ids_str: user.pinned_tweet_ids_str || [],
						possibly_sensitive: false,
						profile_image_url_https: user.profile_image_url_https || "",
						profile_interstitial_type: "",
						screen_name: user.screen_name || "",
						statuses_count: user.statuses_count || 0,
						translator_type: user.translator_type || "",
						verified: user.verified || false,
						want_retweets: user.want_retweets || false,
						withheld_in_countries: user.withheld_in_countries || [],
						id_str: user.id_string || "",
						is_profile_translatable: false,
						profile_image_shape: user.ext_profile_image_shape || "",
						is_blue_verified: user.ext_is_blue_verified || "",
						birthdate: {
							day: 1,
							month: 1,
							year: 1970,
							visibility: "self",
							year_visibility: "self",
						},
						has_graduated_access: true,
						created_at: user.created_at || "",
						blocked_by: false,
						muting: false,
						blocking: false,
					},
				},
				errors: {},
				fetchStatus: { [user.id_string!]: "loaded" },
			},
			translationsProfiles: {
				entities: {},
				errors: {},
				fetchStatus: {},
			},
			imageCache: { entities: {}, errors: {}, fetchStatus: {} },
			emailValidity: {
				entities: {},
				errors: {},
				fetchStatus: {},
			},
			translationsTweets: {
				entities: {},
				errors: {},
				fetchStatus: {},
			},
			bookmarkFolders: {
				entities: {},
				errors: {},
				fetchStatus: {},
			},
			passwordValidity: {
				entities: {},
				errors: {},
				fetchStatus: {},
			},
			phoneNumberValidity: {
				entities: {},
				errors: {},
				fetchStatus: {},
			},
			legacyAndUnifiedCards: {
				entities: {},
				errors: {},
				fetchStatus: {},
			},
			liveEvents: { entities: {}, errors: {}, fetchStatus: {} },
		},
		featureSwitch: {
			defaultConfig: {
				"2fa_temporary_password_enabled": { value: false },
				account_country_setting_countries_whitelist: {
					value: [
						"ad",
						"ae",
						"af",
						"ag",
						"ai",
						"al",
						"am",
						"ao",
						"ar",
						"as",
						"at",
						"au",
						"aw",
						"ax",
						"az",
						"ba",
						"bb",
						"bd",
						"be",
						"bf",
						"bg",
						"bh",
						"bi",
						"bj",
						"bl",
						"bm",
						"bn",
						"bo",
						"bq",
						"br",
						"bs",
						"bt",
						"bv",
						"bw",
						"by",
						"bz",
						"ca",
						"cc",
						"cd",
						"cf",
						"cg",
						"ch",
						"ci",
						"ck",
						"cl",
						"cm",
						"co",
						"cr",
						"cu",
						"cv",
						"cw",
						"cx",
						"cy",
						"cz",
						"de",
						"dj",
						"dk",
						"dm",
						"do",
						"dz",
						"ec",
						"ee",
						"eg",
						"er",
						"es",
						"et",
						"fi",
						"fj",
						"fk",
						"fm",
						"fo",
						"fr",
						"ga",
						"gb",
						"gd",
						"ge",
						"gf",
						"gg",
						"gh",
						"gi",
						"gl",
						"gm",
						"gn",
						"gp",
						"gq",
						"gr",
						"gs",
						"gt",
						"gu",
						"gw",
						"gy",
						"hk",
						"hn",
						"hr",
						"ht",
						"hu",
						"id",
						"ie",
						"il",
						"im",
						"in",
						"io",
						"iq",
						"ir",
						"is",
						"it",
						"je",
						"jm",
						"jo",
						"jp",
						"ke",
						"kg",
						"kh",
						"ki",
						"km",
						"kn",
						"kr",
						"kw",
						"ky",
						"kz",
						"la",
						"lb",
						"lc",
						"li",
						"lk",
						"lr",
						"ls",
						"lt",
						"lu",
						"lv",
						"ly",
						"ma",
						"mc",
						"md",
						"me",
						"mf",
						"mg",
						"mh",
						"mk",
						"ml",
						"mn",
						"mo",
						"mp",
						"mq",
						"mr",
						"ms",
						"mt",
						"mu",
						"mv",
						"mw",
						"mx",
						"my",
						"mz",
						"na",
						"nc",
						"ne",
						"nf",
						"ng",
						"ni",
						"nl",
						"no",
						"np",
						"nr",
						"nu",
						"nz",
						"om",
						"pa",
						"pe",
						"pf",
						"pg",
						"ph",
						"pk",
						"pl",
						"pm",
						"pn",
						"pr",
						"ps",
						"pt",
						"pw",
						"py",
						"qa",
						"re",
						"ro",
						"rs",
						"ru",
						"rw",
						"sa",
						"sb",
						"sc",
						"se",
						"sg",
						"sh",
						"si",
						"sk",
						"sl",
						"sm",
						"sn",
						"so",
						"sr",
						"st",
						"sv",
						"sx",
						"sz",
						"tc",
						"td",
						"tf",
						"tg",
						"th",
						"tj",
						"tk",
						"tl",
						"tm",
						"tn",
						"to",
						"tr",
						"tt",
						"tv",
						"tw",
						"tz",
						"ua",
						"ug",
						"us",
						"uy",
						"uz",
						"va",
						"vc",
						"ve",
						"vi",
						"vn",
						"vu",
						"wf",
						"ws",
						"xk",
						"ye",
						"yt",
						"za",
						"zm",
						"zw",
					],
				},
				ads_spacing_client_fallback_minimum_spacing: {
					value: 3,
				},
				ads_spacing_client_fallback_minimum_spacing_verified_blue: {
					value: 3,
				},
				arkose_challenge_lo_web_notification_dev: {
					value: "BF5FA6C8-9668-4AF9-AFA2-E362F56E5B71",
				},
				arkose_challenge_lo_web_notification_mobile_prod: {
					value: "6A2FD110-7C1A-47CD-82EE-D01FFB4810D7",
				},
				arkose_challenge_lo_web_notification_prod: {
					value: "50706BFE-942C-4EEC-B9AD-03F7CD268FB1",
				},
				arkose_challenge_login_web_devel: {
					value: "DF58DD3B-DFCC-4502-91FA-EDC0DC385CFF",
				},
				arkose_challenge_login_web_prod: {
					value: "2F4F0B28-BC94-4271-8AD7-A51662E3C91C",
				},
				arkose_challenge_open_app_dev: {
					value: "560C66A3-C8EB-4D11-BE53-A8232734AA62",
				},
				arkose_challenge_open_app_prod: {
					value: "6E8D3D6E-30D4-45F1-9838-BA3D9651AAA1",
				},
				arkose_challenge_signup_mobile_dev: {
					value: "006B5E87-7497-403E-9E0C-8FFBAAC6FA67",
				},
				arkose_challenge_signup_mobile_prod: {
					value: "867D55F2-24FD-4C56-AB6D-589EDAF5E7C5",
				},
				arkose_challenge_signup_web_dev: {
					value: "DF58DD3B-DFCC-4502-91FA-EDC0DC385CFF",
				},
				arkose_challenge_signup_web_prod: {
					value: "2CB16598-CB82-4CF7-B332-5990DB66F3AB",
				},
				arkose_challenge_transparent_signup_dev: {
					value: "6627C16B-DA60-47A5-85F7-CFF23BD2BE69",
				},
				arkose_challenge_transparent_signup_prod: {
					value: "4CB8C8B0-40FF-439C-9D0D-9A389ADA18CB",
				},
				Arkose_rweb_hosted_page: { value: true },
				Arkose_use_invisible_challenge_key: { value: false },
				blue_business_subscriptions_management_page_updates_enabled: {
					value: true,
				},
				blue_business_username_change_prompt_enabled: {
					value: false,
				},
				blue_business_verified_admin_cancellation_flow_enabled: {
					value: true,
				},
				blue_business_verified_admin_enabled: { value: true },
				blue_business_vo_free_affiliate_limit: { value: 5 },
				blue_business_vo_nav_for_legacy_verified: {
					value: false,
				},
				blue_longer_video_enabled: { value: false },
				branded_like_preview_enabled: { value: false },
				c9s_auto_collapse_community_detail_header_enabled: {
					value: true,
				},
				c9s_communities_search_enabled: { value: true },
				c9s_community_composer_hashtag_suggestions_enabled: {
					value: false,
				},
				c9s_community_creation_enabled: { value: true },
				c9s_community_creation_form_membership_type_enabled: {
					value: true,
				},
				c9s_community_creation_setup_checklist_enabled: {
					value: true,
				},
				c9s_community_deletion_enabled: { value: true },
				c9s_community_hashtags_carousel_enabled: {
					value: false,
				},
				c9s_community_hashtags_enabled: { value: true },
				c9s_edit_moderators_enabled: { value: true },
				c9s_enabled: { value: true },
				c9s_highlight_tweet_enabled: { value: true },
				c9s_list_members_action_api_enabled: { value: false },
				c9s_logged_out_access_enabled: { value: true },
				c9s_max_community_description_length: { value: 160 },
				c9s_max_community_name_length: { value: 30 },
				c9s_max_rule_count: { value: 10 },
				c9s_max_rule_description_length: { value: 160 },
				c9s_max_rule_name_length: { value: 60 },
				c9s_members_list_search_enabled: { value: true },
				c9s_moderation_enabled: { value: true },
				c9s_nav_list_activity_details_enabled: { value: false },
				c9s_notification_settings_enabled: { value: true },
				c9s_notification_settings_pinned_tweet_enabled: {
					value: true,
				},
				c9s_participation_enabled: { value: true },
				c9s_poll_creation_enabled: { value: true },
				c9s_remove_member_enabled: { value: true },
				c9s_remove_member_list_enabled: { value: true },
				c9s_report_community_enabled: { value: true },
				c9s_rule_management_enabled: { value: true },
				c9s_spotlight_consumption_enabled: { value: true },
				c9s_spotlight_creation_enabled: { value: false },
				c9s_ssr_enabled: { value: false },
				c9s_tab_visibility: { value: "members_only" },
				c9s_timelines_default_selection: { value: "latest" },
				c9s_timelines_ranking_enabled: { value: false },
				c9s_unread_indicator_global_enabled: { value: true },
				c9s_unread_indicator_mod_actions_enabled: {
					value: true,
				},
				c9s_unread_indicator_tweets_enabled: { value: true },
				card_compose_preview_retry_after_ms: { value: 3000 },
				card_compose_preview_retry_max: { value: 5 },
				conversation_controls_change_enabled: { value: true },
				conversation_controls_change_tooltip_enabled: {
					value: true,
				},
				conversation_controls_limited_replies_consumption_configuration: {
					value: "no_reply",
				},
				conversation_controls_limited_replies_creation_enabled: {
					value: true,
				},
				conversation_controls_persistence_enabled: {
					value: true,
				},
				conversational_safety_heads_up_treatment_A_enabled: {
					value: "",
				},
				creator_monetization_profile_subscription_tweets_tab_enabled: {
					value: true,
				},
				creator_monetization_web_tips_dashboard_enabled: {
					value: false,
				},
				creator_monetization_web_tips_onboarding_enabled: {
					value: false,
				},
				creator_subscriptions_subscribe_action_tweet_menu_enabled: {
					value: false,
				},
				creator_subscriptions_subscribe_button_tweet_detail_enabled: {
					value: true,
				},
				creator_subscriptions_subscriber_count_enabled: {
					value: false,
				},
				creator_subscriptions_subscriber_count_min_displayed: {
					value: 1,
				},
				creator_subscriptions_subscription_count_enabled: {
					value: true,
				},
				creator_subscriptions_tweet_preview_api_enabled: {
					value: true,
				},
				dash_region_specific_de_and_tr_media_transparency_items_enabled: {
					value: false,
				},
				dash_region_specific_de_media_transparency_items_enabled: {
					value: false,
				},
				direct_messages_incremental_holdback_2022h1: {
					value: true,
				},
				dm_conversation_labels_max_pinned_count: { value: 6 },
				dm_conversation_labels_pinned_education_enabled: {
					value: true,
				},
				dm_conversation_labels_pinned_enabled: { value: true },
				dm_conversations_nsfw_media_filter_enabled: {
					value: false,
				},
				dm_education_flags_prompt: { value: false },
				dm_inbox_search_groups_bucket_size: { value: 5 },
				dm_inbox_search_max_recent_searches_stored: {
					value: 5,
				},
				dm_inbox_search_message_attachment_previews_enabled: {
					value: true,
				},
				dm_inbox_search_message_results_enabled: {
					value: true,
				},
				dm_inbox_search_messages_bucket_size: { value: 5 },
				dm_inbox_search_modular_results_enabled: {
					value: true,
				},
				dm_inbox_search_people_bucket_size: { value: 5 },
				dm_inbox_search_query_highlighting_conversation_results_enabled: {
					value: true,
				},
				dm_inbox_search_query_highlighting_message_results_enabled: {
					value: true,
				},
				dm_reactions_config_active_reactions: {
					value: [
						"😂:funny",
						"😲:surprised",
						"😢:sad",
						"❤️:like",
						"🔥:excited",
						"👍:agree",
						"👎:disagree",
					],
				},
				dm_reactions_config_inactive_reactions: {
					value: ["😠:angry", "😷:mask"],
				},
				dm_reactions_emoji_picker_enabled: { value: true },
				dm_reactions_rweb_emoji_picker_enabled: {
					value: false,
				},
				dm_replies_long_press_to_reply_enabled: {
					value: false,
				},
				dm_replies_rweb_media_rendering_enabled: {
					value: false,
				},
				dm_replies_ui_rendering_enabled: { value: true },
				dm_secret_conversations_enabled: { value: false },
				dm_secret_conversations_for_blue_verified_enabled: {
					value: true,
				},
				dm_secret_conversations_for_graduated_access_enabled: {
					value: false,
				},
				dm_share_sheet_send_individually_max_count: {
					value: 20,
				},
				dm_voice_rendering_enabled: { value: true },
				dont_mention_me_enabled: { value: true },
				dont_mention_me_mentions_tab_education_enabled: {
					value: true,
				},
				dont_mention_me_view_api_enabled: { value: true },
				ecd_dispute_form_link_enabled: { value: true },
				employee_role: { value: false },
				enable_label_appealing_misinfo_enabled: {
					value: false,
				},
				enable_label_appealing_sensitive_content_enabled: {
					value: false,
				},
				explore_relaunch_enable_immersive_web: { value: false },
				explore_relaunch_enable_immersive_web_navigation_button: {
					value: false,
				},
				explore_relaunch_enabled: { value: false },
				explore_relaunch_onboarding_bar_show_count: {
					value: 100000,
				},
				explore_relaunch_updated_scrubber_position: {
					value: false,
				},
				focused_timeline_actions_onboarding_likes: { value: 3 },
				follow_nudge_conversation_enabled: { value: false },
				freedom_of_speech_not_reach_author_label_enabled: {
					value: true,
				},
				freedom_of_speech_not_reach_fetch_enabled: {
					value: true,
				},
				freedom_of_speech_not_reach_pivot_enabled: {
					value: true,
				},
				global_mention_settings_enabled: { value: false },
				graduated_access_botmaker_decider_enabled: {
					value: true,
				},
				graduated_access_invisible_treatment_enabled: {
					value: true,
				},
				graduated_access_user_prompt_enabled: { value: true },
				graphql_is_translatable_rweb_tweet_is_translatable_enabled: {
					value: true,
				},
				graphql_mutation_destroy_mode: {
					value: "graphql_only",
				},
				graphql_mutation_retweet_mode: {
					value: "graphql_only",
				},
				graphql_mutation_unretweet_mode: {
					value: "graphql_only",
				},
				graphql_mutation_update_mode: { value: "graphql_only" },
				graphql_timeline_v2_bookmark_timeline: { value: true },
				graphql_timeline_v2_query_threaded_conversation_with_injections: {
					value: true,
				},
				graphql_timeline_v2_user_favorites_by_time_timeline: {
					value: true,
				},
				graphql_timeline_v2_user_media_timeline: {
					value: true,
				},
				graphql_timeline_v2_user_profile_timeline: {
					value: true,
				},
				graphql_timeline_v2_user_profile_with_replies_timeline: {
					value: true,
				},
				gryphon_accountsync_polling_interval_ms: {
					value: 300000,
				},
				gryphon_fps_tracking_enabled: { value: true },
				gryphon_hide_quick_promote: { value: false },
				gryphon_jump_to_latest_enabled: { value: true },
				gryphon_optout_hidden_in_navbar: { value: false },
				gryphon_optout_in_settings: { value: false },
				gryphon_redux_perf_optimization_enabled: {
					value: true,
				},
				gryphon_redux_perf_optimization_v2_enabled: {
					value: true,
				},
				gryphon_search_based_deck_enabled: { value: false },
				gryphon_sharing_column_permission: { value: "follow" },
				gryphon_sharing_deck_permission: { value: "" },
				gryphon_survey_enabled: { value: false },
				gryphon_survey_url: { value: "" },
				gryphon_timeline_polling_latest_interval_ms: {
					value: 15000,
				},
				gryphon_timeline_polling_overrides: {
					value: "explore,,60000",
				},
				gryphon_timeline_polling_top_interval_ms: {
					value: 60000,
				},
				gryphon_user_role: { value: "" },
				gryphon_video_docking_enabled: { value: true },
				guest_broadcasting_timeline_decorations_enabled: {
					value: false,
				},
				hashfetti_all_hashflags: { value: false },
				hashfetti_duration_ms: { value: 4000 },
				hashfetti_enabled: { value: true },
				hashfetti_particle_count: { value: 30 },
				hashflags_animation_like_button_enabled: {
					value: true,
				},
				hidden_profile_likes_enabled: { value: false },
				hidden_profile_likes_settings_enabled: { value: false },
				highlights_tweets_action_enabled: { value: true },
				highlights_tweets_action_menu_upsell_enabled: {
					value: true,
				},
				highlights_tweets_tab_ui_enabled: { value: true },
				highlights_tweets_tab_upsell_enabled: { value: false },
				home_timeline_like_reactivity_enabled: { value: true },
				home_timeline_like_reactivity_fatigue: { value: 10 },
				home_timeline_spheres_detail_page_muting_enabled: {
					value: true,
				},
				home_timeline_spheres_max_user_owned_or_subscribed_lists_count: {
					value: 5,
				},
				home_timeline_spheres_ranking_mode_control_enabled: {
					value: false,
				},
				identity_verification_debadging_notification_enabled: {
					value: true,
				},
				identity_verification_educational_prompt_enabled: {
					value: true,
				},
				identity_verification_intake_enabled: { value: false },
				identity_verification_notable_demo_survey: {
					value: false,
				},
				krs_registration_enabled: { value: false },
				linked_search_experiment: { value: false },
				live_event_docking_enabled: { value: true },
				live_event_interstitial_seen_cache_enabled: {
					value: true,
				},
				live_event_multi_video_auto_advance_dock_enabled: {
					value: true,
				},
				live_event_multi_video_auto_advance_enabled: {
					value: true,
				},
				live_event_multi_video_auto_advance_fullscreen_enabled: {
					value: false,
				},
				live_event_multi_video_auto_advance_transition_duration_seconds: {
					value: 5,
				},
				live_event_multi_video_enabled: { value: true },
				live_event_timeline_default_refresh_rate_interval_seconds: {
					value: 30,
				},
				live_event_timeline_minimum_refresh_rate_interval_seconds: {
					value: 10,
				},
				live_event_timeline_server_controlled_refresh_rate_enabled: {
					value: true,
				},
				livepipeline_client_enabled: { value: true },
				livepipeline_tweetengagement_enabled: { value: true },
				longform_ad_free_articles_badging_enabled: {
					value: false,
				},
				longform_notetweets_composition_without_claims_enabled: {
					value: false,
				},
				longform_notetweets_consumption_enabled: {
					value: true,
				},
				longform_notetweets_drafts_enabled: { value: true },
				longform_notetweets_inline_media_enabled: {
					value: false,
				},
				longform_notetweets_max_tweet_per_thread: { value: 25 },
				longform_notetweets_max_weighted_character_length: {
					value: 10000,
				},
				longform_notetweets_mobile_richtextinput: {
					value: false,
				},
				longform_notetweets_rich_composition_enabled: {
					value: 1,
				},
				longform_notetweets_rich_text_read_enabled: {
					value: true,
				},
				longform_notetweets_tweet_storm_enabled: {
					value: false,
				},
				longform_reader_mode_view_in_reader_mode_entry_button_enabled: {
					value: false,
				},
				longform_top_articles_friends_of_friends_enabled: {
					value: true,
				},
				longform_top_articles_time_window_enabled: {
					value: true,
				},
				machine_translation_holdback_logged_in: {
					value: false,
				},
				machine_translation_holdback_logged_out: {
					value: false,
				},
				media_async_upload_amplify_duration_threshold: {
					value: 600,
				},
				media_async_upload_longer_video_max_video_duration: {
					value: 7260,
				},
				media_async_upload_longer_video_max_video_size: {
					value: 8388608,
				},
				media_async_upload_longer_video_resolution_selector: {
					value: true,
				},
				media_async_upload_max_avatar_gif_size: { value: 5 },
				media_async_upload_max_gif_size: { value: 15 },
				media_async_upload_max_image_size: { value: 5 },
				media_async_upload_max_video_duration: { value: 140 },
				media_async_upload_max_video_size: { value: 512 },
				media_edge_to_edge_content_enabled: { value: false },
				media_infra_play_icon_version_number: {
					value: "playicon_v0",
				},
				moment_annotations_enabled: { value: true },
				moments_new_share_variant_floating_action_button: {
					value: false,
				},
				network_layer_503_backoff_mode: { value: "host" },
				ocf_2fa_enrollment_bouncer_enabled: { value: true },
				ocf_2fa_enrollment_enabled: { value: true },
				ocf_2fa_unenrollment_enabled: { value: true },
				onboarding_connect_tab_urt_graphql_enabled: {
					value: true,
				},
				onboarding_project_uls_enabled: { value: false },
				papago_tweet_translation_from_korean_entity_protected: {
					value: false,
				},
				papago_tweet_translation_from_korean_entity_protected_destinations: {
					value: ["en", "ja", "zh", "zh-cn", "zh-Hans", "zh-tw", "zh-Hant"],
				},
				papago_tweet_translation_from_korean_entity_unprotected: {
					value: false,
				},
				papago_tweet_translation_from_korean_entity_unprotected_destinations: {
					value: ["id", "es", "th"],
				},
				papago_tweet_translation_to_korean: { value: false },
				papago_tweet_translation_to_korean_sources: {
					value: ["en", "ja"],
				},
				professional_launchpad_m1_enabled: { value: true },
				professional_launchpad_mobile_promotable_timeline: {
					value: false,
				},
				professional_launchpad_upload_address_book: {
					value: true,
				},
				profile_foundations_about_tab_enabled: { value: false },
				profile_foundations_about_tab_tooltip_enabled: {
					value: false,
				},
				profile_foundations_header_fields_hidden: {
					value: false,
				},
				profile_foundations_tweet_stats_enabled: {
					value: false,
				},
				profile_foundations_tweet_stats_tweet_count: {
					value: false,
				},
				profile_foundations_tweet_stats_tweet_frequency: {
					value: false,
				},
				profile_foundations_tweet_stats_tweet_topics: {
					value: false,
				},
				profile_navigation_likes_tab_prominence_enabled: {
					value: false,
				},
				report_center_mvp_r1_enabled: { value: true },
				report_center_mvp_r2_enabled: { value: false },
				responsive_web_3rd_party_category_branch: { value: 3 },
				responsive_web_3rd_party_category_double_click: {
					value: 3,
				},
				responsive_web_3rd_party_category_external_referer: {
					value: 3,
				},
				responsive_web_3rd_party_category_ga: { value: 3 },
				responsive_web_3rd_party_category_google_platform: {
					value: 2,
				},
				responsive_web_3rd_party_category_google_recaptcha: {
					value: 2,
				},
				responsive_web_3rd_party_category_player_card: {
					value: 3,
				},
				responsive_web_3rd_party_category_sentry: { value: 2 },
				responsive_web_3rd_party_category_sign_in_with_apple: {
					value: 2,
				},
				responsive_web_account_access_language_lo_banners: {
					value: "control",
				},
				responsive_web_account_access_language_lo_splash_sidebar: {
					value: "control",
				},
				responsive_web_alt_text_nudges_enabled: { value: true },
				responsive_web_alt_text_nudges_settings_enabled: {
					value: true,
				},
				responsive_web_alt_text_translations_enabled: {
					value: true,
				},
				responsive_web_api_transition_enabled: { value: true },
				responsive_web_article_nudge_enabled: { value: true },
				responsive_web_audio_space_ring_home_timeline: {
					value: false,
				},
				responsive_web_author_labels_avatar_label_enabled: {
					value: false,
				},
				responsive_web_author_labels_focal_label_enabled: {
					value: false,
				},
				responsive_web_author_labels_handle_label_enabled: {
					value: false,
				},
				responsive_web_auto_logout_multiaccount_enabled: {
					value: true,
				},
				responsive_web_auto_logout_restrictedauthtoken_enabled: {
					value: true,
				},
				responsive_web_auto_logout_twid_enabled: {
					value: true,
				},
				responsive_web_birdwatch_consumption_enabled: {
					value: false,
				},
				responsive_web_birdwatch_contribution_enabled: {
					value: false,
				},
				responsive_web_birdwatch_country_allowed: {
					value: true,
				},
				responsive_web_birdwatch_media_notes_enabled: {
					value: true,
				},
				responsive_web_birdwatch_netzdg_enabled: {
					value: false,
				},
				responsive_web_birdwatch_note_limit_enabled: {
					value: true,
				},
				responsive_web_birdwatch_note_writing_enabled: {
					value: false,
				},
				responsive_web_birdwatch_pivots_enabled: {
					value: false,
				},
				responsive_web_birdwatch_rating_crowd_enabled: {
					value: false,
				},
				responsive_web_birdwatch_rating_participant_enabled: {
					value: false,
				},
				responsive_web_birdwatch_ratings_m2_tags_enabled: {
					value: true,
				},
				responsive_web_birdwatch_ratings_v2_enabled: {
					value: true,
				},
				responsive_web_birdwatch_site_enabled: { value: true },
				responsive_web_birdwatch_top_contributor_score_cutoff: {
					value: 10,
				},
				responsive_web_branch_cpid_enabled: { value: false },
				responsive_web_branch_sdk_enabled: { value: true },
				responsive_web_business_government_verified_new_icons_enabled: {
					value: true,
				},
				responsive_web_captions_always_display_enabled: {
					value: false,
				},
				responsive_web_captions_always_display_settings_enabled: {
					value: false,
				},
				responsive_web_card_conversion_hoisted: {
					value: "off",
				},
				responsive_web_card_preconnect_enabled: {
					value: false,
				},
				responsive_web_card_preload_mode: { value: false },
				responsive_web_carousel_v2_cards_non_safari_enabled: {
					value: false,
				},
				responsive_web_carousel_v2_cards_safari_variant: {
					value: "control",
				},
				responsive_web_carousel_v2_media_detail_enabled: {
					value: false,
				},
				responsive_web_collection_ads_enabled: { value: true },
				responsive_web_commerce_shop_spotlight_enabled: {
					value: false,
				},
				responsive_web_communities_slices_enabled: {
					value: true,
				},
				responsive_web_composer_configurable_video_player_enabled: {
					value: false,
				},
				responsive_web_continue_as_always_enabled: {
					value: false,
				},
				responsive_web_continue_as_param_enabled: {
					value: true,
				},
				responsive_web_convert_card_video_to_gif_enabled: {
					value: false,
				},
				responsive_web_cookie_compliance_1st_party_killswitch_list: {
					value: [],
				},
				responsive_web_cookie_compliance_banner_enabled: {
					value: false,
				},
				responsive_web_cookie_compliance_gingersnap_enabled: {
					value: false,
				},
				responsive_web_cookie_consent_signal_enabled: {
					value: false,
				},
				responsive_web_csrf_clientside_enabled: { value: true },
				responsive_web_dance_cc_tools_enabled: { value: false },
				responsive_web_dance_cc_tools_include_development_enabled: {
					value: false,
				},
				responsive_web_dcm_2_enabled: { value: true },
				responsive_web_deamplification_replies_dropdown_selector_enabled: {
					value: false,
				},
				responsive_web_device_follow_without_user_follow_enabled: {
					value: false,
				},
				responsive_web_disconnect_third_party_sso_enabled: {
					value: true,
				},
				responsive_web_dockable_autoplay_policy_enabled: {
					value: true,
				},
				responsive_web_dynamic_product_ads_enabled: {
					value: true,
				},
				responsive_web_edit_tweet_api_enabled: { value: true },
				responsive_web_edit_tweet_composition_enabled: {
					value: true,
				},
				responsive_web_edit_tweet_enabled: { value: false },
				responsive_web_edit_tweet_perspective_enabled: {
					value: false,
				},
				responsive_web_edit_tweet_upsell_enabled: {
					value: true,
				},
				responsive_web_element_size_impression_scribe_enabled: {
					value: true,
				},
				responsive_web_enhance_cards_enabled: { value: false },
				responsive_web_eu_countries: {
					value: [
						"at",
						"be",
						"bg",
						"ch",
						"cy",
						"cz",
						"de",
						"dk",
						"ee",
						"es",
						"fi",
						"fr",
						"gb",
						"gr",
						"hr",
						"hu",
						"ie",
						"is",
						"it",
						"li",
						"lt",
						"lu",
						"lv",
						"mt",
						"nl",
						"no",
						"pl",
						"pt",
						"ro",
						"se",
						"si",
						"sk",
					],
				},
				responsive_web_explorer_ads_enabled: { value: true },
				responsive_web_extension_compatibility_hide: {
					value: false,
				},
				responsive_web_extension_compatibility_impression_guard: {
					value: true,
				},
				responsive_web_extension_compatibility_override_param: {
					value: false,
				},
				responsive_web_extension_compatibility_scribe: {
					value: true,
				},
				responsive_web_extension_compatibility_size_threshold: {
					value: 50,
				},
				responsive_web_fake_root_twitter_domain_for_testing: {
					value: false,
				},
				responsive_web_fetch_hashflags_on_boot: {
					value: false,
				},
				responsive_web_follower_count_reduction_copy_enabled: {
					value: true,
				},
				responsive_web_footer_categorized_variant_enabled: {
					value: false,
				},
				responsive_web_framerate_tracking_home_enabled: {
					value: false,
				},
				responsive_web_gaggle_site_enabled: { value: false },
				responsive_web_graphql_exclude_directive_enabled: {
					value: true,
				},
				responsive_web_graphql_feedback: { value: true },
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: {
					value: false,
				},
				responsive_web_graphql_timeline_navigation_enabled: {
					value: true,
				},
				responsive_web_hashtag_highlight_is_enabled: {
					value: false,
				},
				responsive_web_hashtag_highlight_show_avatar: {
					value: false,
				},
				responsive_web_hashtag_highlight_use_small_font: {
					value: false,
				},
				responsive_web_hevc_upload_preview_enabled: {
					value: false,
				},
				responsive_web_home_pinned_timelines_latest_enabled: {
					value: true,
				},
				responsive_web_home_pinned_timelines_lists_enabled: {
					value: true,
				},
				responsive_web_impression_pixel_enabled: {
					value: true,
				},
				responsive_web_impression_tracker_refactor_enabled: {
					value: true,
				},
				responsive_web_install_banner_show_immediate: {
					value: false,
				},
				responsive_web_instream_video_redesign_enabled: {
					value: true,
				},
				responsive_web_instream_video_store_keyed: {
					value: true,
				},
				responsive_web_lbm_v2_home_enabled: { value: false },
				responsive_web_lbm_v2_replies_enabled: { value: false },
				responsive_web_left_nav_refresh_connect_enabled: {
					value: false,
				},
				responsive_web_left_nav_refresh_topics_enabled: {
					value: false,
				},
				responsive_web_list_tweet_integration_enabled: {
					value: false,
				},
				responsive_web_live_commerce_enabled: { value: false },
				responsive_web_live_video_parity_periscope_auth_enabled: {
					value: false,
				},
				responsive_web_lo_gating_prominent_sta_button_paths: {
					value: "switch-to-app-footer",
				},
				responsive_web_locale_context_direction_enabled: {
					value: true,
				},
				responsive_web_location_spotlight_display_map: {
					value: true,
				},
				responsive_web_location_spotlight_v1_config: {
					value: true,
				},
				responsive_web_location_spotlight_v1_display: {
					value: true,
				},
				responsive_web_logged_out_explore_enabled: {
					value: true,
				},
				responsive_web_logged_out_explore_home_path_enabled: {
					value: true,
				},
				responsive_web_logged_out_gating_13622_ddg: {
					value: "",
				},
				responsive_web_logged_out_gating_14788_ddg: {
					value: "",
				},
				responsive_web_logged_out_gating_14992_ddg: {
					value: "",
				},
				responsive_web_logged_out_gating_15377_ddg: {
					value: "",
				},
				responsive_web_logged_out_gating_non_holdback_ddgs: {
					value: "",
				},
				responsive_web_logged_out_notifications_enabled: {
					value: true,
				},
				responsive_web_logged_out_notifications_fatigue_days_count: {
					value: 7,
				},
				responsive_web_logged_out_notifications_including_home: {
					value: false,
				},
				responsive_web_login_input_type_email_enabled: {
					value: false,
				},
				responsive_web_login_signup_sheet_app_install_cta_enabled: {
					value: true,
				},
				responsive_web_media_upload_limit_2g: { value: 250 },
				responsive_web_media_upload_limit_3g: { value: 1500 },
				responsive_web_media_upload_limit_slow_2g: {
					value: 150,
				},
				responsive_web_media_upload_md5_hashing_enabled: {
					value: true,
				},
				responsive_web_media_upload_metrics_enabled: {
					value: true,
				},
				responsive_web_media_upload_target_jpg_pixels_per_byte: {
					value: 6,
				},
				responsive_web_menu_section_divider_enabled: {
					value: false,
				},
				responsive_web_mixed_media_composition_enabled: {
					value: false,
				},
				responsive_web_mixed_media_consumption_enabled: {
					value: true,
				},
				responsive_web_mobile_app_spotlight_v1_config: {
					value: false,
				},
				responsive_web_mobile_app_spotlight_v1_display: {
					value: false,
				},
				responsive_web_multiple_account_limit: { value: 5 },
				responsive_web_new_copy_security_key_2fa_enabled: {
					value: true,
				},
				responsive_web_new_user_badge_color_enabled: {
					value: true,
				},
				responsive_web_nft_avatar: { value: true },
				responsive_web_nft_avatar_help_link: {
					value:
						"https://help.twitter.com/en/using-twitter/twitter-blue-labs#nft",
				},
				responsive_web_notifications_empty_state_redesign_variant: {
					value: "control",
				},
				responsive_web_ntab_verified_mentions_vit_internal_dogfood: {
					value: true,
				},
				responsive_web_oauth2_consent_flow_enabled: {
					value: true,
				},
				responsive_web_ocf_reportflow_appeals_enabled: {
					value: false,
				},
				responsive_web_ocf_reportflow_dms_enabled: {
					value: false,
				},
				responsive_web_ocf_reportflow_lists_enabled: {
					value: true,
				},
				responsive_web_ocf_reportflow_profiles_enabled: {
					value: true,
				},
				responsive_web_ocf_reportflow_promoted_enabled: {
					value: false,
				},
				responsive_web_ocf_reportflow_spaces_enabled: {
					value: false,
				},
				responsive_web_ocf_reportflow_suspension_appeals_enabled: {
					value: false,
				},
				responsive_web_ocf_reportflow_testers: { value: false },
				responsive_web_ocf_reportflow_tweets_enabled: {
					value: true,
				},
				responsive_web_ocf_sms_autoverify_darkwrite: {
					value: false,
				},
				responsive_web_ocf_sms_autoverify_enabled: {
					value: false,
				},
				responsive_web_offscreen_video_scroller_removal_enabled: {
					value: false,
				},
				responsive_web_one_hour_edit_window_enabled: {
					value: false,
				},
				responsive_web_open_app_appbar_button_enabled: {
					value: true,
				},
				responsive_web_open_in_app_prompt_enabled: {
					value: false,
				},
				responsive_web_opengraph_image_tweet_copy_1: {
					value: true,
				},
				responsive_web_opengraph_play_icon_overlay: {
					value: true,
				},
				responsive_web_opengraph_video_tweet_copy_1: {
					value: true,
				},
				responsive_web_original_tweet_nudge_enabled: {
					value: false,
				},
				responsive_web_original_tweet_nudge_show_nudge: {
					value: false,
				},
				responsive_web_original_tweet_nudge_supported_languages: {
					value: ["en"],
				},
				responsive_web_passwordless_sso_enabled: {
					value: false,
				},
				responsive_web_pinned_replies_enabled: { value: false },
				responsive_web_placeholder_siwg_button_enabled: {
					value: false,
				},
				responsive_web_preload_app_shell_enabled: {
					value: false,
				},
				responsive_web_prerolls_fullscreen_disabled_on_ios: {
					value: false,
				},
				responsive_web_professional_journeys_holdback_enabled: {
					value: false,
				},
				responsive_web_profile_spotlight_v0_config: {
					value: true,
				},
				responsive_web_profile_spotlight_v0_display: {
					value: true,
				},
				responsive_web_qp_keyword_targeting_enabled: {
					value: false,
				},
				responsive_web_reader_extended_menu: { value: true },
				responsive_web_redux_use_fragment_enabled: {
					value: false,
				},
				responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled:
					{ value: false },
				responsive_web_repeat_profile_visits_notifications_enabled: {
					value: false,
				},
				responsive_web_reply_nudge_copy_version: { value: 0 },
				responsive_web_reply_nudge_enabled: { value: false },
				responsive_web_reply_nudge_show_nudge: { value: true },
				responsive_web_reply_nudge_supported_languages: {
					value: ["en"],
				},
				responsive_web_reply_nudge_testing_keyword: {
					value: false,
				},
				responsive_web_reply_storm_enabled: { value: false },
				responsive_web_report_page_not_found: { value: false },
				responsive_web_scroller_autopoll_enabled: {
					value: false,
				},
				responsive_web_scroller_top_positioning_enabled: {
					value: false,
				},
				responsive_web_search_home_page_design_variation: {
					value: "",
				},
				responsive_web_send_cookies_metadata_enabled: {
					value: true,
				},
				responsive_web_server_user_profile_fetch_enabled: {
					value: false,
				},
				responsive_web_settings_timeline_polling_enabled: {
					value: false,
				},
				responsive_web_settings_timeline_polling_interval_ms: {
					value: 0,
				},
				responsive_web_settings_timeline_refresh_background_interval: {
					value: 0,
				},
				responsive_web_share_action_order_desktop: {
					value: "copy_link_first_bookmark_last",
				},
				responsive_web_share_action_order_mobile: {
					value: "default",
				},
				responsive_web_share_only_tweet_url_omit_title_and_text: {
					value: true,
				},
				responsive_web_sidebar_ttf_enabled: { value: false },
				responsive_web_spud_enabled: { value: true },
				responsive_web_sso_redirect_enabled: { value: true },
				responsive_web_ssr_footer_categorized_variant_enabled: {
					value: true,
				},
				responsive_web_ssr_verified_crawler_rux_injections_enabled: {
					value: true,
				},
				responsive_web_subscribers_ntab_for_creators_enabled: {
					value: true,
				},
				responsive_web_suppress_app_button_banner_suppressed: {
					value: false,
				},
				responsive_web_themed_scrollbars: { value: false },
				responsive_web_third_party_sso_buttons_enabled: {
					value: true,
				},
				responsive_web_timeline_cover_killswitch_enabled: {
					value: false,
				},
				responsive_web_timeline_relay_lists_management_enabled: {
					value: false,
				},
				responsive_web_timeline_relay_user_lists_enabled: {
					value: false,
				},
				responsive_web_tracer_global_trace_sample_rate: {
					value: 1,
				},
				responsive_web_trends_setting_new_endpoints: {
					value: true,
				},
				responsive_web_tweet_analytics_m2_enabled: {
					value: false,
				},
				responsive_web_tweet_analytics_m3_enabled: {
					value: false,
				},
				responsive_web_tweet_analytics_promoted_audience_demographics_enabled: {
					value: false,
				},
				responsive_web_tweet_analytics_video_metrics_v2_enabled: {
					value: true,
				},
				responsive_web_twitter_article_compose_enabled: {
					value: false,
				},
				responsive_web_twitter_article_cover_aspect_ratio_5_2: {
					value: true,
				},
				responsive_web_twitter_article_data_v2_enabled: {
					value: false,
				},
				responsive_web_twitter_article_geo_gated: {
					value: false,
				},
				responsive_web_twitter_article_max_times_show_tweet_banner: {
					value: 0,
				},
				responsive_web_twitter_article_notes_tab_enabled: {
					value: false,
				},
				responsive_web_twitter_article_tweet_other_notes_enabled: {
					value: true,
				},
				responsive_web_twitter_article_tweet_own_notes_enabled: {
					value: false,
				},
				responsive_web_twitter_article_view_enabled: {
					value: true,
				},
				responsive_web_twitter_blue_signup_nux_enabled: {
					value: true,
				},
				responsive_web_twitter_blue_subscriptions_disabled: {
					value: false,
				},
				responsive_web_twitter_blue_verified_badge_ntab_all_badge_is_enabled: {
					value: false,
				},
				responsive_web_twitter_blue_verified_badge_ntab_empty_state_enabled: {
					value: true,
				},
				responsive_web_twitter_blue_verified_badge_ntab_verified_tab_index: {
					value: 2,
				},
				responsive_web_twitter_blue_verified_badge_settings_blue_verified_features_enabled:
					{ value: true },
				responsive_web_unsupported_entry_tombstone: {
					value: false,
				},
				responsive_web_use_app_button_variations: {
					value: "treatment_1",
				},
				responsive_web_use_app_prompt_copy_variant: {
					value: "",
				},
				responsive_web_use_app_prompt_enabled: { value: false },
				responsive_web_use_badge_counts_for_ntab: {
					value: false,
				},
				responsive_web_user_badge_education_get_verified_button_enabled: {
					value: true,
				},
				responsive_web_user_badge_education_redesign_enabled: {
					value: true,
				},
				responsive_web_verified_organizations_application_form_enabled: {
					value: false,
				},
				responsive_web_verified_organizations_invoice_enabled: {
					value: false,
				},
				responsive_web_verified_organizations_verified_entry_enabled: {
					value: false,
				},
				responsive_web_video_pcomplete_enabled: { value: true },
				responsive_web_video_promoted_logging_enabled: {
					value: false,
				},
				responsive_web_video_trimmer_enabled: { value: false },
				responsive_web_vod_muted_captions_enabled: {
					value: true,
				},
				responsive_web_vs_config_resize_observer_enabled: {
					value: true,
				},
				responsive_web_zipkin_api_requests_enabled: {
					value: false,
				},
				responsive_web_zipkin_api_requests_paths_allowlist: {
					value: ["/2/timeline/home.json"],
				},
				rito_safety_mode_blocked_profile_enabled: {
					value: true,
				},
				rito_safety_mode_features_enabled: { value: false },
				rito_safety_mode_modal_prompt_enabled: { value: false },
				rito_safety_mode_settings_enabled: { value: false },
				rweb_client_transaction_id_enabled: { value: false },
				rweb_enable_logged_out_search_search_bar_enabled: {
					value: false,
				},
				rweb_home_mixer_enable_social_context_filter_social_contexts: {
					value: true,
				},
				rweb_home_perf_client_prefetch_bypass_sw: {
					value: false,
				},
				rweb_home_perf_client_prefetch_mode: { value: "none" },
				rweb_home_perf_client_prefetch_timeout_ms: { value: 0 },
				rweb_lists_search_enabled: { value: true },
				rweb_lists_timeline_redesign_enabled: { value: true },
				rweb_tweets_boosting_enabled: { value: false },
				rweb_tweets_reply_context_hidden: { value: true },
				rweb_tweets_tweet_detail_font_size: {
					value: "headline2",
				},
				rweb_update_fatigue_switch_to_app_day_timeout: {
					value: 7,
				},
				rweb_update_fatigue_switch_to_app_link: {
					value: "BannerSwitchToApp",
				},
				rweb_video_tagging_enabled: { value: false },
				sc_mock_data_enabled: { value: false },
				sc_r4_enabled: { value: false },
				scribe_api_error_sample_size: { value: 0 },
				scribe_api_sample_size: { value: 100 },
				scribe_cdn_host_list: {
					value: [
						"si0.twimg.com",
						"si1.twimg.com",
						"si2.twimg.com",
						"si3.twimg.com",
						"a0.twimg.com",
						"a1.twimg.com",
						"a2.twimg.com",
						"a3.twimg.com",
						"abs.twimg.com",
						"amp.twimg.com",
						"o.twimg.com",
						"pbs.twimg.com",
						"pbs-eb.twimg.com",
						"pbs-ec.twimg.com",
						"pbs-v6.twimg.com",
						"pbs-h1.twimg.com",
						"pbs-h2.twimg.com",
						"video.twimg.com",
						"platform.twitter.com",
						"cdn.api.twitter.com",
						"ton.twimg.com",
						"v.cdn.vine.co",
						"mtc.cdn.vine.co",
						"edge.vncdn.co",
						"mid.vncdn.co",
					],
				},
				scribe_cdn_sample_size: { value: 50 },
				scribe_web_nav_sample_size: { value: 100 },
				search_results_disable_latest_tab_when_logged_out: {
					value: false,
				},
				search_timelines_graphql_enabled: { value: false },
				sensitive_media_settings_enabled: { value: false },
				sensitive_tweet_warnings_enabled: { value: true },
				settings_revamp_search_bar_enabled: { value: false },
				shortened_tracking_parameters_mapping: {
					value: [
						"01:twcamp^share|twsrc^android|twgr^sms",
						"02:twcamp^share|twsrc^android|twgr^email",
						"03:twcamp^share|twsrc^android|twgr^gmail",
						"04:twcamp^share|twsrc^android|twgr^facebook",
						"05:twcamp^share|twsrc^android|twgr^wechat",
						"06:twcamp^share|twsrc^android|twgr^line",
						"07:twcamp^share|twsrc^android|twgr^fbmessenger",
						"08:twcamp^share|twsrc^android|twgr^whatsapp",
						"09:twcamp^share|twsrc^android|twgr^other",
						"10:twcamp^share|twsrc^ios|twgr^sms",
						"11:twcamp^share|twsrc^ios|twgr^email",
						"12:twcamp^share|twsrc^ios|twgr^other",
						"13:twcamp^share|twsrc^android|twgr^download",
						"14:twcamp^share|twsrc^ios|twgr^download",
						"15:twcamp^share|twsrc^android|twgr^hangouts",
						"16:twcamp^share|twsrc^android|twgr^twitterdm",
						"17:twcamp^share|twsrc^m5|twgr^email",
						"18:twcamp^share|twsrc^m5|twgr^download",
						"19:twcamp^share|twsrc^android|twgr^copy",
						"20:twcamp^share|twsrc^m5|twgr^copy",
						"21:twcamp^share|twsrc^ios|twgr^copy",
						"22:twcamp^share|twsrc^ios|twgr^snapchat",
						"23:twcamp^share|twsrc^android|twgr^snapchat",
						"24:twcamp^share|twsrc^ios|twgr^whatsapp",
						"25:twcamp^share|twsrc^ios|twgr^fbmessenger",
						"26:twcamp^share|twsrc^ios|twgr^facebook",
						"27:twcamp^share|twsrc^ios|twgr^gmail",
						"28:twcamp^share|twsrc^ios|twgr^telegram",
						"29:twcamp^share|twsrc^ios|twgr^line",
						"30:twcamp^share|twsrc^ios|twgr^viber",
						"31:twcamp^share|twsrc^android|twgr^slack",
						"32:twcamp^share|twsrc^android|twgr^kakao",
						"33:twcamp^share|twsrc^android|twgr^discord",
						"34:twcamp^share|twsrc^android|twgr^reddit",
						"35:twcamp^share|twsrc^android|twgr^telegram",
						"36:twcamp^share|twsrc^android|twgr^instagram",
						"37:twcamp^share|twsrc^android|twgr^daum",
						"38:twcamp^share|twsrc^ios|twgr^instagram",
						"39:twcamp^share|twsrc^ios|twgr^linkedin",
						"40:twcamp^share|twsrc^android|twgr^linkedin",
						"41:twcamp^share|twsrc^gryphon|twgr^copy",
						"42:twcamp^share|twsrc^iphone|twgr^sms",
						"43:twcamp^share|twsrc^iphone|twgr^email",
						"44:twcamp^share|twsrc^iphone|twgr^other",
						"45:twcamp^share|twsrc^iphone|twgr^download",
						"46:twcamp^share|twsrc^iphone|twgr^copy",
						"47:twcamp^share|twsrc^iphone|twgr^snapchat",
						"48:twcamp^share|twsrc^iphone|twgr^whatsapp",
						"49:twcamp^share|twsrc^iphone|twgr^fbmessenger",
						"50:twcamp^share|twsrc^iphone|twgr^facebook",
						"51:twcamp^share|twsrc^iphone|twgr^gmail",
						"52:twcamp^share|twsrc^iphone|twgr^telegram",
						"53:twcamp^share|twsrc^iphone|twgr^line",
						"54:twcamp^share|twsrc^iphone|twgr^viber",
						"55:twcamp^share|twsrc^iphone|twgr^instagram",
						"56:twcamp^share|twsrc^iphone|twgr^linkedin",
						"57:twcamp^share|twsrc^ipad|twgr^sms",
						"58:twcamp^share|twsrc^ipad|twgr^email",
						"59:twcamp^share|twsrc^ipad|twgr^other",
						"60:twcamp^share|twsrc^ipad|twgr^download",
						"61:twcamp^share|twsrc^ipad|twgr^copy",
						"62:twcamp^share|twsrc^ipad|twgr^snapchat",
						"63:twcamp^share|twsrc^ipad|twgr^whatsapp",
						"64:twcamp^share|twsrc^ipad|twgr^fbmessenger",
						"65:twcamp^share|twsrc^ipad|twgr^facebook",
						"66:twcamp^share|twsrc^ipad|twgr^gmail",
						"67:twcamp^share|twsrc^ipad|twgr^telegram",
						"68:twcamp^share|twsrc^ipad|twgr^line",
						"69:twcamp^share|twsrc^ipad|twgr^viber",
						"70:twcamp^share|twsrc^ipad|twgr^instagram",
						"71:twcamp^share|twsrc^ipad|twgr^linkedin",
					],
				},
				smbo_legacy_pac_is_in_follow_position_test: {
					value: false,
				},
				social_context_and_topic_context_refresh_alignment_enabled: {
					value: false,
				},
				spaces_2022_h2_clipping: { value: true },
				spaces_2022_h2_clipping_consumption: { value: true },
				spaces_2022_h2_clipping_duration_seconds: { value: 30 },
				spaces_2022_h2_follow_host: { value: true },
				spaces_2022_h2_reactions_web_send: { value: true },
				spaces_2022_h2_spacebar_use_mock_data: { value: false },
				spaces_2022_h2_spacebar_web_sidebar: { value: true },
				spaces_2022_h2_spacebar_web_topnavbar: {
					value: "purple",
				},
				spaces_2022_h2_spaces_communities: { value: true },
				standardized_nudges_misinfo: { value: true },
				standardized_nudges_toxicity: { value: false },
				stateful_login_enabled: { value: true },
				stateful_login_intent_enabled: { value: true },
				subscriptions_annual_subscription_signup_enabled: {
					value: true,
				},
				subscriptions_blue_premium_labeling_enabled: {
					value: true,
				},
				subscriptions_blue_verified_edit_profile_backend_error_message_enabled:
					{ value: true },
				subscriptions_blue_verified_edit_profile_error_message_enabled: {
					value: true,
				},
				subscriptions_enabled: { value: true },
				subscriptions_feature_1002: { value: true },
				subscriptions_feature_1003: { value: true },
				subscriptions_feature_1005: { value: true },
				subscriptions_feature_1006: { value: false },
				subscriptions_feature_1007: { value: true },
				subscriptions_feature_1009: { value: true },
				subscriptions_feature_1011: { value: true },
				subscriptions_feature_1012: { value: false },
				subscriptions_feature_1013: { value: false },
				subscriptions_feature_1014: { value: true },
				subscriptions_feature_labs_1001: { value: true },
				subscriptions_feature_labs_1004: { value: true },
				subscriptions_long_video_rweb_new_copy_enabled: {
					value: true,
				},
				subscriptions_long_video_upload: { value: true },
				subscriptions_management_enabled: { value: true },
				subscriptions_marketing_page_annual_redesign_content_enabled: {
					value: true,
				},
				subscriptions_marketing_page_include_tax_enabled: {
					value: false,
				},
				subscriptions_marketing_page_tiered_redesign_enabled: {
					value: true,
				},
				subscriptions_product_feature_list_api_enabled: {
					value: false,
				},
				subscriptions_settings_item_enabled: { value: true },
				subscriptions_sign_up_enabled: { value: false },
				subscriptions_stripe_testing: { value: false },
				subscriptions_tab_customization_on_android_enabled: {
					value: true,
				},
				subscriptions_top_articles_on_ios_enabled: {
					value: true,
				},
				subscriptions_twitter_blue_logo_enabled: {
					value: true,
				},
				subscriptions_verification_info_verified_since_enabled: {
					value: true,
				},
				super_follow_android_web_subscription_enabled: {
					value: false,
				},
				super_follow_exclusive_tweet_creation_api_enabled: {
					value: true,
				},
				super_follow_onboarding_application_perks_enabled: {
					value: true,
				},
				super_follow_onboarding_application_redesign_enabled: {
					value: true,
				},
				super_follow_onboarding_blue_verified_requirement_enabled: {
					value: true,
				},
				super_follow_onboarding_granular_pricing_enabled: {
					value: true,
				},
				super_follow_subscriptions_home_timeline_tab_enabled: {
					value: true,
				},
				super_follow_subscriptions_home_timeline_tab_sticky_enabled: {
					value: true,
				},
				super_follow_subscriptions_tax_calculation_enabled: {
					value: true,
				},
				super_follow_tweet_label_redesign_enabled: {
					value: true,
				},
				super_follow_web_application_enabled: { value: false },
				super_follow_web_deactivate_enabled: { value: true },
				super_follow_web_debug_enabled: { value: false },
				super_follow_web_edit_perks_enabled: { value: true },
				super_follow_web_onboarding_enabled: { value: true },
				targeted_project_friday_enabled: { value: false },
				topic_landing_page_clearer_controls_enabled: {
					value: true,
				},
				topic_landing_page_cta_text: { value: "control" },
				topic_landing_page_share_enabled: { value: true },
				topics_context_controls_followed_variation: {
					value: "see_more",
				},
				topics_context_controls_implicit_context_x_enabled: {
					value: true,
				},
				topics_context_controls_implicit_variation: {
					value: "see_more",
				},
				topics_context_controls_inline_prompt_enabled: {
					value: false,
				},
				topics_discovery_page_enabled: { value: false },
				toxic_reply_filter_inline_callout_enabled: {
					value: false,
				},
				toxic_reply_filter_settings_enabled: { value: false },
				traffic_rewrite_map: { value: [] },
				trusted_friends_audience_control_exp_variant: {
					value: "control",
				},
				trusted_friends_consumption_enabled: { value: true },
				trusted_friends_dash_discovery_enabled: { value: true },
				trusted_friends_tweet_creation_enabled: { value: true },
				tweet_awards_web_coin_purchase_enabled: {
					value: false,
				},
				tweet_awards_web_coin_purchase_sandbox_enabled: {
					value: false,
				},
				tweet_awards_web_non_focal_tweet_coins_enabled: {
					value: false,
				},
				tweet_awards_web_tipping_enabled: { value: false },
				tweet_limited_actions_config_community_tweet_community_deleted: {
					value: [
						"add_to_bookmarks",
						"add_to_moment",
						"embed",
						"follow",
						"hide_community_tweet",
						"like",
						"lists_add_remove",
						"mute_conversation",
						"pin_to_profile",
						"quote_tweet",
						"react",
						"remove_from_community",
						"reply",
						"retweet",
						"send_via_dm",
						"share_tweet_via",
						"view_hidden_replies",
						"view_tweet_activity",
						"vote_on_poll",
						"highlight",
					],
				},
				tweet_limited_actions_config_community_tweet_community_not_found: {
					value: [
						"add_to_bookmarks",
						"add_to_moment",
						"embed",
						"follow",
						"hide_community_tweet",
						"like",
						"lists_add_remove",
						"mute_conversation",
						"pin_to_profile",
						"quote_tweet",
						"react",
						"remove_from_community",
						"reply",
						"retweet",
						"send_via_dm",
						"share_tweet_via",
						"view_hidden_replies",
						"view_tweet_activity",
						"vote_on_poll",
						"highlight",
					],
				},
				tweet_limited_actions_config_community_tweet_community_suspended: {
					value: [
						"add_to_bookmarks",
						"add_to_moment",
						"embed",
						"follow",
						"hide_community_tweet",
						"like",
						"lists_add_remove",
						"mute_conversation",
						"pin_to_profile",
						"quote_tweet",
						"react",
						"remove_from_community",
						"reply",
						"retweet",
						"send_via_dm",
						"share_tweet_via",
						"view_hidden_replies",
						"view_tweet_activity",
						"vote_on_poll",
						"highlight",
					],
				},
				tweet_limited_actions_config_community_tweet_hidden: {
					value: [
						"add_to_bookmarks",
						"add_to_moment",
						"embed",
						"follow",
						"hide_community_tweet",
						"like",
						"lists_add_remove",
						"mute_conversation",
						"pin_to_profile",
						"quote_tweet",
						"react",
						"reply",
						"retweet",
						"send_via_dm",
						"share_tweet_via",
						"view_hidden_replies",
						"view_tweet_activity",
						"vote_on_poll",
						"highlight",
					],
				},
				tweet_limited_actions_config_community_tweet_member: {
					value: ["embed", "pin_to_profile", "retweet", "highlight"],
				},
				tweet_limited_actions_config_community_tweet_member_removed: {
					value: [
						"add_to_bookmarks",
						"add_to_moment",
						"embed",
						"follow",
						"hide_community_tweet",
						"like",
						"lists_add_remove",
						"mute_conversation",
						"pin_to_profile",
						"quote_tweet",
						"react",
						"remove_from_community",
						"reply",
						"retweet",
						"send_via_dm",
						"share_tweet_via",
						"view_hidden_replies",
						"view_tweet_activity",
						"vote_on_poll",
						"highlight",
					],
				},
				tweet_limited_actions_config_community_tweet_non_member: {
					value: [
						"embed",
						"like",
						"pin_to_profile",
						"react",
						"reply",
						"reply_down_vote",
						"retweet",
						"share_tweet_via",
						"vote_on_poll",
						"highlight",
					],
				},
				tweet_limited_actions_config_disable_state_media_autoplay: {
					value: ["autoplay"],
				},
				tweet_limited_actions_config_dpa_enabled: {
					value: true,
				},
				tweet_limited_actions_config_dynamic_product_ad: {
					value: [
						"reply",
						"retweet",
						"quote_tweet",
						"share_tweet_via",
						"send_via_dm",
						"copy_link",
						"add_to_bookmarks",
						"like",
					],
				},
				tweet_limited_actions_config_enabled: { value: true },
				tweet_limited_actions_config_freedom_of_speech_not_reach: {
					value: [
						"reply",
						"retweet",
						"quote_tweet",
						"share_tweet_via",
						"add_to_bookmarks",
						"pin_to_profile",
						"copy_link",
						"send_via_dm",
						"like",
						"embed",
						"highlight",
						"edit_tweet",
					],
				},
				tweet_limited_actions_config_limit_trusted_friends_tweet: {
					value: [
						"retweet",
						"quote_tweet",
						"share_tweet_via",
						"send_via_dm",
						"copy_link",
						"view_tweet_activity",
						"embed",
						"add_to_moment",
					],
				},
				tweet_limited_actions_config_non_compliant: {
					value: [
						"reply",
						"retweet",
						"like",
						"react",
						"send_via_dm",
						"add_to_bookmarks",
						"add_to_moment",
						"pin_to_profile",
						"view_tweet_activity",
						"share_tweet_via",
						"copy_link",
						"highlight",
					],
				},
				tweet_limited_actions_config_skip_tweet_detail: {
					value: ["reply"],
				},
				tweet_limited_actions_config_skip_tweet_detail_enabled: {
					value: true,
				},
				tweet_limited_actions_config_soft_nudge_with_quote_tweet: {
					value: ["show_retweet_action_menu"],
				},
				tweet_with_visibility_results_all_gql_limited_actions_enabled: {
					value: false,
				},
				tweet_with_visibility_results_partial_gql_limited_actions_enabled: {
					value: false,
				},
				tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled:
					{ value: false },
				tweetypie_unmention_optimization_enabled: {
					value: true,
				},
				twitter_chat_communities_chat_enabled: { value: false },
				twitter_delegate_enabled: { value: false },
				ucpd_enabled: { value: true },
				unified_cards_collection_ads_convert_to_image_website_card: {
					value: false,
				},
				unified_cards_dpa_cta_button_enabled: { value: true },
				unified_cards_dpa_metadata_enabled: { value: true },
				unified_cards_dpa_placeholder_media_key: {
					value: ["3_1485707239990054912"],
				},
				user_display_name_max_limit: { value: 50 },
				verified_phone_label_enabled: { value: false },
				view_counts_everywhere_api_enabled: { value: true },
				view_counts_public_visibility_enabled: { value: true },
				vod_attribution_tweet_detail_pivot_enabled: {
					value: true,
				},
				voice_consumption_enabled: { value: true },
				voice_rooms_card_version: { value: 2 },
				voice_rooms_discovery_page_enabled: { value: false },
				voice_rooms_end_screen_participants: { value: true },
				voice_rooms_expanded_dock: { value: true },
				voice_rooms_expanded_dock_reactions: { value: true },
				voice_rooms_host_analytics_enabled: { value: true },
				voice_rooms_recent_search_audiospace_ring_enabled: {
					value: true,
				},
				voice_rooms_replay_consumption: { value: true },
				voice_rooms_search_results_page_audiospace_ring_enabled: {
					value: false,
				},
				voice_rooms_sharing_listening_data_with_followers_setting_enabled: {
					value: true,
				},
				voice_rooms_speaking_enabled: { value: false },
				voice_rooms_typeahead_audiospace_ring_enabled: {
					value: true,
				},
				web_image_large_webp_variants: { value: false },
				web_video_bitrate_persistence_enabled: { value: false },
				web_video_caption_repositioning_enabled: {
					value: true,
				},
				web_video_hls_android_mse_enabled: { value: true },
				web_video_hls_mp4_threshold_sec: { value: 0 },
				web_video_hls_variant_version: { value: "1" },
				web_video_hlsjs_version: { value: "" },
				web_video_playback_rate_enabled: { value: true },
				web_video_player_size_cap_disabled: { value: false },
				web_video_prefetch_playlist_autoplay_disabled: {
					value: false,
				},
				web_video_safari_hlsjs_enabled: { value: true },
				web_video_transcribed_captions_enabled: {
					value: false,
				},
			},
			user: {
				config: {
					"2fa_temporary_password_enabled": { value: false },
					account_country_setting_countries_whitelist: {
						value: [
							"ad",
							"ae",
							"af",
							"ag",
							"ai",
							"al",
							"am",
							"ao",
							"ar",
							"as",
							"at",
							"au",
							"aw",
							"ax",
							"az",
							"ba",
							"bb",
							"bd",
							"be",
							"bf",
							"bg",
							"bh",
							"bi",
							"bj",
							"bl",
							"bm",
							"bn",
							"bo",
							"bq",
							"br",
							"bs",
							"bt",
							"bv",
							"bw",
							"by",
							"bz",
							"ca",
							"cc",
							"cd",
							"cf",
							"cg",
							"ch",
							"ci",
							"ck",
							"cl",
							"cm",
							"co",
							"cr",
							"cu",
							"cv",
							"cw",
							"cx",
							"cy",
							"cz",
							"de",
							"dj",
							"dk",
							"dm",
							"do",
							"dz",
							"ec",
							"ee",
							"eg",
							"er",
							"es",
							"et",
							"fi",
							"fj",
							"fk",
							"fm",
							"fo",
							"fr",
							"ga",
							"gb",
							"gd",
							"ge",
							"gf",
							"gg",
							"gh",
							"gi",
							"gl",
							"gm",
							"gn",
							"gp",
							"gq",
							"gr",
							"gs",
							"gt",
							"gu",
							"gw",
							"gy",
							"hk",
							"hn",
							"hr",
							"ht",
							"hu",
							"id",
							"ie",
							"il",
							"im",
							"in",
							"io",
							"iq",
							"ir",
							"is",
							"it",
							"je",
							"jm",
							"jo",
							"jp",
							"ke",
							"kg",
							"kh",
							"ki",
							"km",
							"kn",
							"kr",
							"kw",
							"ky",
							"kz",
							"la",
							"lb",
							"lc",
							"li",
							"lk",
							"lr",
							"ls",
							"lt",
							"lu",
							"lv",
							"ly",
							"ma",
							"mc",
							"md",
							"me",
							"mf",
							"mg",
							"mh",
							"mk",
							"ml",
							"mn",
							"mo",
							"mp",
							"mq",
							"mr",
							"ms",
							"mt",
							"mu",
							"mv",
							"mw",
							"mx",
							"my",
							"mz",
							"na",
							"nc",
							"ne",
							"nf",
							"ng",
							"ni",
							"nl",
							"no",
							"np",
							"nr",
							"nu",
							"nz",
							"om",
							"pa",
							"pe",
							"pf",
							"pg",
							"ph",
							"pk",
							"pl",
							"pm",
							"pn",
							"pr",
							"ps",
							"pt",
							"pw",
							"py",
							"qa",
							"re",
							"ro",
							"rs",
							"ru",
							"rw",
							"sa",
							"sb",
							"sc",
							"se",
							"sg",
							"sh",
							"si",
							"sk",
							"sl",
							"sm",
							"sn",
							"so",
							"sr",
							"st",
							"sv",
							"sx",
							"sz",
							"tc",
							"td",
							"tf",
							"tg",
							"th",
							"tj",
							"tk",
							"tl",
							"tm",
							"tn",
							"to",
							"tr",
							"tt",
							"tv",
							"tw",
							"tz",
							"ua",
							"ug",
							"us",
							"uy",
							"uz",
							"va",
							"vc",
							"ve",
							"vi",
							"vn",
							"vu",
							"wf",
							"ws",
							"xk",
							"ye",
							"yt",
							"za",
							"zm",
							"zw",
						],
					},
					ads_spacing_client_fallback_minimum_spacing: {
						value: 3,
					},
					ads_spacing_client_fallback_minimum_spacing_verified_blue: {
						value: 3,
					},
					arkose_challenge_lo_web_notification_dev: {
						value: "BF5FA6C8-9668-4AF9-AFA2-E362F56E5B71",
					},
					arkose_challenge_lo_web_notification_mobile_prod: {
						value: "6A2FD110-7C1A-47CD-82EE-D01FFB4810D7",
					},
					arkose_challenge_lo_web_notification_prod: {
						value: "50706BFE-942C-4EEC-B9AD-03F7CD268FB1",
					},
					arkose_challenge_login_web_devel: {
						value: "DF58DD3B-DFCC-4502-91FA-EDC0DC385CFF",
					},
					arkose_challenge_login_web_prod: {
						value: "2F4F0B28-BC94-4271-8AD7-A51662E3C91C",
					},
					arkose_challenge_open_app_dev: {
						value: "560C66A3-C8EB-4D11-BE53-A8232734AA62",
					},
					arkose_challenge_open_app_prod: {
						value: "6E8D3D6E-30D4-45F1-9838-BA3D9651AAA1",
					},
					arkose_challenge_signup_mobile_dev: {
						value: "006B5E87-7497-403E-9E0C-8FFBAAC6FA67",
					},
					arkose_challenge_signup_mobile_prod: {
						value: "867D55F2-24FD-4C56-AB6D-589EDAF5E7C5",
					},
					arkose_challenge_signup_web_dev: {
						value: "DF58DD3B-DFCC-4502-91FA-EDC0DC385CFF",
					},
					arkose_challenge_signup_web_prod: {
						value: "2CB16598-CB82-4CF7-B332-5990DB66F3AB",
					},
					arkose_challenge_transparent_signup_dev: {
						value: "6627C16B-DA60-47A5-85F7-CFF23BD2BE69",
					},
					arkose_challenge_transparent_signup_prod: {
						value: "4CB8C8B0-40FF-439C-9D0D-9A389ADA18CB",
					},
					Arkose_rweb_hosted_page: { value: true },
					Arkose_use_invisible_challenge_key: {
						value: false,
					},
					blue_business_subscriptions_management_page_updates_enabled: {
						value: true,
					},
					blue_business_username_change_prompt_enabled: {
						value: false,
					},
					blue_business_verified_admin_cancellation_flow_enabled: {
						value: true,
					},
					blue_business_verified_admin_enabled: {
						value: true,
					},
					blue_business_vo_free_affiliate_limit: { value: 5 },
					blue_business_vo_nav_for_legacy_verified: {
						value: true,
					},
					blue_longer_video_enabled: { value: false },
					branded_like_preview_enabled: { value: false },
					c9s_auto_collapse_community_detail_header_enabled: {
						value: true,
					},
					c9s_communities_search_enabled: { value: true },
					c9s_community_composer_hashtag_suggestions_enabled: {
						value: false,
					},
					c9s_community_creation_enabled: { value: true },
					c9s_community_creation_form_membership_type_enabled: {
						value: true,
					},
					c9s_community_creation_setup_checklist_enabled: {
						value: true,
					},
					c9s_community_deletion_enabled: { value: true },
					c9s_community_hashtags_carousel_enabled: {
						value: false,
					},
					c9s_community_hashtags_enabled: { value: true },
					c9s_edit_moderators_enabled: { value: true },
					c9s_enabled: { value: true },
					c9s_highlight_tweet_enabled: { value: true },
					c9s_list_members_action_api_enabled: {
						value: false,
					},
					c9s_logged_out_access_enabled: { value: true },
					c9s_max_community_description_length: {
						value: 160,
					},
					c9s_max_community_name_length: { value: 30 },
					c9s_max_rule_count: { value: 10 },
					c9s_max_rule_description_length: { value: 160 },
					c9s_max_rule_name_length: { value: 60 },
					c9s_members_list_search_enabled: { value: true },
					c9s_moderation_enabled: { value: true },
					c9s_nav_list_activity_details_enabled: {
						value: false,
					},
					c9s_notification_settings_enabled: { value: true },
					c9s_notification_settings_pinned_tweet_enabled: {
						value: true,
					},
					c9s_participation_enabled: { value: true },
					c9s_poll_creation_enabled: { value: true },
					c9s_remove_member_enabled: { value: true },
					c9s_remove_member_list_enabled: { value: true },
					c9s_report_community_enabled: { value: true },
					c9s_rule_management_enabled: { value: true },
					c9s_spotlight_consumption_enabled: { value: true },
					c9s_spotlight_creation_enabled: { value: false },
					c9s_ssr_enabled: { value: false },
					c9s_tab_visibility: { value: "members_only" },
					c9s_timelines_default_selection: {
						value: "latest",
					},
					c9s_timelines_ranking_enabled: { value: false },
					c9s_unread_indicator_global_enabled: {
						value: true,
					},
					c9s_unread_indicator_mod_actions_enabled: {
						value: true,
					},
					c9s_unread_indicator_tweets_enabled: {
						value: true,
					},
					card_compose_preview_retry_after_ms: {
						value: 3000,
					},
					card_compose_preview_retry_max: { value: 5 },
					conversation_controls_change_enabled: {
						value: true,
					},
					conversation_controls_change_tooltip_enabled: {
						value: true,
					},
					conversation_controls_limited_replies_consumption_configuration: {
						value: "no_reply",
					},
					conversation_controls_limited_replies_creation_enabled: {
						value: true,
					},
					conversation_controls_persistence_enabled: {
						value: true,
					},
					conversational_safety_heads_up_treatment_A_enabled: {
						value: "",
					},
					creator_monetization_profile_subscription_tweets_tab_enabled: {
						value: true,
					},
					creator_monetization_web_tips_dashboard_enabled: {
						value: false,
					},
					creator_monetization_web_tips_onboarding_enabled: {
						value: false,
					},
					creator_subscriptions_subscribe_action_tweet_menu_enabled: {
						value: true,
					},
					creator_subscriptions_subscribe_button_tweet_detail_enabled: {
						value: true,
					},
					creator_subscriptions_subscriber_count_enabled: {
						value: false,
					},
					creator_subscriptions_subscriber_count_min_displayed: {
						value: 1,
					},
					creator_subscriptions_subscription_count_enabled: {
						value: true,
					},
					creator_subscriptions_tweet_preview_api_enabled: {
						value: true,
					},
					dash_region_specific_de_and_tr_media_transparency_items_enabled: {
						value: false,
					},
					dash_region_specific_de_media_transparency_items_enabled: {
						value: false,
					},
					direct_messages_incremental_holdback_2022h1: {
						value: true,
					},
					dm_conversation_labels_max_pinned_count: {
						value: 6,
					},
					dm_conversation_labels_pinned_education_enabled: {
						value: true,
					},
					dm_conversation_labels_pinned_enabled: {
						value: true,
					},
					dm_conversations_nsfw_media_filter_enabled: {
						value: false,
					},
					dm_education_flags_prompt: { value: false },
					dm_inbox_search_groups_bucket_size: { value: 5 },
					dm_inbox_search_max_recent_searches_stored: {
						value: 5,
					},
					dm_inbox_search_message_attachment_previews_enabled: {
						value: true,
					},
					dm_inbox_search_message_results_enabled: {
						value: true,
					},
					dm_inbox_search_messages_bucket_size: { value: 5 },
					dm_inbox_search_modular_results_enabled: {
						value: true,
					},
					dm_inbox_search_people_bucket_size: { value: 5 },
					dm_inbox_search_query_highlighting_conversation_results_enabled: {
						value: true,
					},
					dm_inbox_search_query_highlighting_message_results_enabled: {
						value: true,
					},
					dm_reactions_config_active_reactions: {
						value: [
							"😂:funny",
							"😲:surprised",
							"😢:sad",
							"❤️:like",
							"🔥:excited",
							"👍:agree",
							"👎:disagree",
						],
					},
					dm_reactions_config_inactive_reactions: {
						value: ["😠:angry", "😷:mask"],
					},
					dm_reactions_emoji_picker_enabled: { value: true },
					dm_reactions_rweb_emoji_picker_enabled: {
						value: false,
					},
					dm_replies_long_press_to_reply_enabled: {
						value: false,
					},
					dm_replies_rweb_media_rendering_enabled: {
						value: false,
					},
					dm_replies_ui_rendering_enabled: { value: true },
					dm_secret_conversations_enabled: { value: false },
					dm_secret_conversations_for_blue_verified_enabled: {
						value: true,
					},
					dm_secret_conversations_for_graduated_access_enabled: {
						value: false,
					},
					dm_share_sheet_send_individually_max_count: {
						value: 20,
					},
					dm_voice_rendering_enabled: { value: true },
					dont_mention_me_enabled: { value: true },
					dont_mention_me_mentions_tab_education_enabled: {
						value: true,
					},
					dont_mention_me_view_api_enabled: { value: true },
					ecd_dispute_form_link_enabled: { value: true },
					employee_role: { value: false },
					enable_label_appealing_misinfo_enabled: {
						value: false,
					},
					enable_label_appealing_sensitive_content_enabled: {
						value: false,
					},
					explore_relaunch_enable_immersive_web: {
						value: false,
					},
					explore_relaunch_enable_immersive_web_navigation_button: {
						value: false,
					},
					explore_relaunch_enabled: { value: false },
					explore_relaunch_onboarding_bar_show_count: {
						value: 100000,
					},
					explore_relaunch_updated_scrubber_position: {
						value: false,
					},
					focused_timeline_actions_onboarding_likes: {
						value: 3,
					},
					follow_nudge_conversation_enabled: { value: false },
					freedom_of_speech_not_reach_author_label_enabled: {
						value: true,
					},
					freedom_of_speech_not_reach_fetch_enabled: {
						value: true,
					},
					freedom_of_speech_not_reach_pivot_enabled: {
						value: true,
					},
					global_mention_settings_enabled: { value: false },
					graduated_access_botmaker_decider_enabled: {
						value: true,
					},
					graduated_access_invisible_treatment_enabled: {
						value: true,
					},
					graduated_access_user_prompt_enabled: {
						value: true,
					},
					graphql_is_translatable_rweb_tweet_is_translatable_enabled: {
						value: true,
					},
					graphql_mutation_destroy_mode: {
						value: "graphql_only",
					},
					graphql_mutation_retweet_mode: {
						value: "graphql_only",
					},
					graphql_mutation_unretweet_mode: {
						value: "graphql_only",
					},
					graphql_mutation_update_mode: {
						value: "graphql_only",
					},
					graphql_timeline_v2_bookmark_timeline: {
						value: true,
					},
					graphql_timeline_v2_query_threaded_conversation_with_injections: {
						value: true,
					},
					graphql_timeline_v2_user_favorites_by_time_timeline: {
						value: true,
					},
					graphql_timeline_v2_user_media_timeline: {
						value: true,
					},
					graphql_timeline_v2_user_profile_timeline: {
						value: true,
					},
					graphql_timeline_v2_user_profile_with_replies_timeline: {
						value: true,
					},
					gryphon_accountsync_polling_interval_ms: {
						value: 300000,
					},
					gryphon_fps_tracking_enabled: { value: true },
					gryphon_hide_quick_promote: { value: false },
					gryphon_jump_to_latest_enabled: { value: true },
					gryphon_optout_hidden_in_navbar: { value: false },
					gryphon_optout_in_settings: { value: false },
					gryphon_redux_perf_optimization_enabled: {
						value: true,
					},
					gryphon_redux_perf_optimization_v2_enabled: {
						value: true,
					},
					gryphon_search_based_deck_enabled: { value: false },
					gryphon_sharing_column_permission: {
						value: "follow",
					},
					gryphon_sharing_deck_permission: { value: "" },
					gryphon_survey_enabled: { value: false },
					gryphon_survey_url: { value: "" },
					gryphon_timeline_polling_latest_interval_ms: {
						value: 15000,
					},
					gryphon_timeline_polling_overrides: {
						value: "explore,,60000",
					},
					gryphon_timeline_polling_top_interval_ms: {
						value: 60000,
					},
					gryphon_user_role: { value: "" },
					gryphon_video_docking_enabled: { value: true },
					guest_broadcasting_timeline_decorations_enabled: {
						value: false,
					},
					hashfetti_all_hashflags: { value: false },
					hashfetti_duration_ms: { value: 4000 },
					hashfetti_enabled: { value: true },
					hashfetti_particle_count: { value: 30 },
					hashflags_animation_like_button_enabled: {
						value: true,
					},
					hidden_profile_likes_enabled: { value: false },
					hidden_profile_likes_settings_enabled: {
						value: false,
					},
					highlights_tweets_action_enabled: { value: true },
					highlights_tweets_action_menu_upsell_enabled: {
						value: true,
					},
					highlights_tweets_tab_ui_enabled: { value: true },
					highlights_tweets_tab_upsell_enabled: {
						value: false,
					},
					home_timeline_like_reactivity_enabled: {
						value: true,
					},
					home_timeline_like_reactivity_fatigue: {
						value: 10,
					},
					home_timeline_spheres_detail_page_muting_enabled: {
						value: true,
					},
					home_timeline_spheres_max_user_owned_or_subscribed_lists_count: {
						value: 5,
					},
					home_timeline_spheres_ranking_mode_control_enabled: {
						value: false,
					},
					identity_verification_debadging_notification_enabled: {
						value: true,
					},
					identity_verification_educational_prompt_enabled: {
						value: true,
					},
					identity_verification_intake_enabled: {
						value: false,
					},
					identity_verification_notable_demo_survey: {
						value: false,
					},
					krs_registration_enabled: { value: true },
					linked_search_experiment: { value: false },
					live_event_docking_enabled: { value: true },
					live_event_interstitial_seen_cache_enabled: {
						value: true,
					},
					live_event_multi_video_auto_advance_dock_enabled: {
						value: true,
					},
					live_event_multi_video_auto_advance_enabled: {
						value: true,
					},
					live_event_multi_video_auto_advance_fullscreen_enabled: {
						value: false,
					},
					live_event_multi_video_auto_advance_transition_duration_seconds: {
						value: 5,
					},
					live_event_multi_video_enabled: { value: true },
					live_event_timeline_default_refresh_rate_interval_seconds: {
						value: 30,
					},
					live_event_timeline_minimum_refresh_rate_interval_seconds: {
						value: 10,
					},
					live_event_timeline_server_controlled_refresh_rate_enabled: {
						value: true,
					},
					livepipeline_client_enabled: { value: true },
					livepipeline_tweetengagement_enabled: {
						value: true,
					},
					longform_ad_free_articles_badging_enabled: {
						value: false,
					},
					longform_notetweets_composition_without_claims_enabled: {
						value: false,
					},
					longform_notetweets_consumption_enabled: {
						value: true,
					},
					longform_notetweets_drafts_enabled: { value: true },
					longform_notetweets_inline_media_enabled: {
						value: false,
					},
					longform_notetweets_max_tweet_per_thread: {
						value: 25,
					},
					longform_notetweets_max_weighted_character_length: {
						value: 10000,
					},
					longform_notetweets_mobile_richtextinput: {
						value: false,
					},
					longform_notetweets_rich_composition_enabled: {
						value: 1,
					},
					longform_notetweets_rich_text_read_enabled: {
						value: true,
					},
					longform_notetweets_tweet_storm_enabled: {
						value: false,
					},
					longform_reader_mode_view_in_reader_mode_entry_button_enabled: {
						value: false,
					},
					longform_top_articles_friends_of_friends_enabled: {
						value: true,
					},
					longform_top_articles_time_window_enabled: {
						value: true,
					},
					machine_translation_holdback_logged_in: {
						value: false,
					},
					machine_translation_holdback_logged_out: {
						value: false,
					},
					media_async_upload_amplify_duration_threshold: {
						value: 600,
					},
					media_async_upload_longer_video_max_video_duration: {
						value: 7260,
					},
					media_async_upload_longer_video_max_video_size: {
						value: 8388608,
					},
					media_async_upload_longer_video_resolution_selector: {
						value: true,
					},
					media_async_upload_max_avatar_gif_size: {
						value: 5,
					},
					media_async_upload_max_gif_size: { value: 15 },
					media_async_upload_max_image_size: { value: 5 },
					media_async_upload_max_video_duration: {
						value: 140,
					},
					media_async_upload_max_video_size: { value: 512 },
					media_edge_to_edge_content_enabled: {
						value: false,
					},
					media_infra_play_icon_version_number: {
						value: "playicon_v0",
					},
					moment_annotations_enabled: { value: true },
					moments_new_share_variant_floating_action_button: {
						value: false,
					},
					network_layer_503_backoff_mode: { value: "host" },
					ocf_2fa_enrollment_bouncer_enabled: { value: true },
					ocf_2fa_enrollment_enabled: { value: true },
					ocf_2fa_unenrollment_enabled: { value: true },
					onboarding_connect_tab_urt_graphql_enabled: {
						value: true,
					},
					onboarding_project_uls_enabled: { value: false },
					papago_tweet_translation_from_korean_entity_protected: {
						value: false,
					},
					papago_tweet_translation_from_korean_entity_protected_destinations: {
						value: ["en", "ja", "zh", "zh-cn", "zh-Hans", "zh-tw", "zh-Hant"],
					},
					papago_tweet_translation_from_korean_entity_unprotected: {
						value: false,
					},
					papago_tweet_translation_from_korean_entity_unprotected_destinations:
						{ value: ["id", "es", "th"] },
					papago_tweet_translation_to_korean: {
						value: false,
					},
					papago_tweet_translation_to_korean_sources: {
						value: ["en", "ja"],
					},
					professional_launchpad_m1_enabled: { value: true },
					professional_launchpad_mobile_promotable_timeline: {
						value: false,
					},
					professional_launchpad_upload_address_book: {
						value: true,
					},
					profile_foundations_about_tab_enabled: {
						value: false,
					},
					profile_foundations_about_tab_tooltip_enabled: {
						value: false,
					},
					profile_foundations_header_fields_hidden: {
						value: false,
					},
					profile_foundations_tweet_stats_enabled: {
						value: false,
					},
					profile_foundations_tweet_stats_tweet_count: {
						value: false,
					},
					profile_foundations_tweet_stats_tweet_frequency: {
						value: false,
					},
					profile_foundations_tweet_stats_tweet_topics: {
						value: false,
					},
					profile_navigation_likes_tab_prominence_enabled: {
						value: false,
					},
					report_center_mvp_r1_enabled: { value: true },
					report_center_mvp_r2_enabled: { value: false },
					responsive_web_3rd_party_category_branch: {
						value: 3,
					},
					responsive_web_3rd_party_category_double_click: {
						value: 3,
					},
					responsive_web_3rd_party_category_external_referer: {
						value: 3,
					},
					responsive_web_3rd_party_category_ga: { value: 3 },
					responsive_web_3rd_party_category_google_platform: {
						value: 2,
					},
					responsive_web_3rd_party_category_google_recaptcha: {
						value: 2,
					},
					responsive_web_3rd_party_category_player_card: {
						value: 3,
					},
					responsive_web_3rd_party_category_sentry: {
						value: 2,
					},
					responsive_web_3rd_party_category_sign_in_with_apple: {
						value: 2,
					},
					responsive_web_account_access_language_lo_banners: {
						value: "control",
					},
					responsive_web_account_access_language_lo_splash_sidebar: {
						value: "control",
					},
					responsive_web_alt_text_nudges_enabled: {
						value: true,
					},
					responsive_web_alt_text_nudges_settings_enabled: {
						value: true,
					},
					responsive_web_alt_text_translations_enabled: {
						value: true,
					},
					responsive_web_api_transition_enabled: {
						value: true,
					},
					responsive_web_article_nudge_enabled: {
						value: true,
					},
					responsive_web_audio_space_ring_home_timeline: {
						value: false,
					},
					responsive_web_author_labels_avatar_label_enabled: {
						value: false,
					},
					responsive_web_author_labels_focal_label_enabled: {
						value: false,
					},
					responsive_web_author_labels_handle_label_enabled: {
						value: false,
					},
					responsive_web_auto_logout_multiaccount_enabled: {
						value: true,
					},
					responsive_web_auto_logout_restrictedauthtoken_enabled: {
						value: true,
					},
					responsive_web_auto_logout_twid_enabled: {
						value: true,
					},
					responsive_web_birdwatch_consumption_enabled: {
						value: true,
					},
					responsive_web_birdwatch_contribution_enabled: {
						value: false,
					},
					responsive_web_birdwatch_country_allowed: {
						value: true,
					},
					responsive_web_birdwatch_media_notes_enabled: {
						value: true,
					},
					responsive_web_birdwatch_netzdg_enabled: {
						value: false,
					},
					responsive_web_birdwatch_note_limit_enabled: {
						value: true,
					},
					responsive_web_birdwatch_note_writing_enabled: {
						value: false,
					},
					responsive_web_birdwatch_pivots_enabled: {
						value: true,
					},
					responsive_web_birdwatch_rating_crowd_enabled: {
						value: true,
					},
					responsive_web_birdwatch_rating_participant_enabled: {
						value: false,
					},
					responsive_web_birdwatch_ratings_m2_tags_enabled: {
						value: true,
					},
					responsive_web_birdwatch_ratings_v2_enabled: {
						value: true,
					},
					responsive_web_birdwatch_site_enabled: {
						value: true,
					},
					responsive_web_birdwatch_top_contributor_score_cutoff: {
						value: 10,
					},
					responsive_web_branch_cpid_enabled: {
						value: false,
					},
					responsive_web_branch_sdk_enabled: { value: true },
					responsive_web_business_government_verified_new_icons_enabled: {
						value: true,
					},
					responsive_web_captions_always_display_enabled: {
						value: false,
					},
					responsive_web_captions_always_display_settings_enabled: {
						value: false,
					},
					responsive_web_card_conversion_hoisted: {
						value: "off",
					},
					responsive_web_card_preconnect_enabled: {
						value: false,
					},
					responsive_web_card_preload_mode: { value: false },
					responsive_web_carousel_v2_cards_non_safari_enabled: {
						value: false,
					},
					responsive_web_carousel_v2_cards_safari_variant: {
						value: "control",
					},
					responsive_web_carousel_v2_media_detail_enabled: {
						value: false,
					},
					responsive_web_collection_ads_enabled: {
						value: true,
					},
					responsive_web_commerce_shop_spotlight_enabled: {
						value: false,
					},
					responsive_web_communities_slices_enabled: {
						value: true,
					},
					responsive_web_composer_configurable_video_player_enabled: {
						value: false,
					},
					responsive_web_continue_as_always_enabled: {
						value: false,
					},
					responsive_web_continue_as_param_enabled: {
						value: true,
					},
					responsive_web_convert_card_video_to_gif_enabled: {
						value: false,
					},
					responsive_web_cookie_compliance_1st_party_killswitch_list: {
						value: [],
					},
					responsive_web_cookie_compliance_banner_enabled: {
						value: true,
					},
					responsive_web_cookie_compliance_gingersnap_enabled: {
						value: true,
					},
					responsive_web_cookie_consent_signal_enabled: {
						value: true,
					},
					responsive_web_csrf_clientside_enabled: {
						value: true,
					},
					responsive_web_dance_cc_tools_enabled: {
						value: false,
					},
					responsive_web_dance_cc_tools_include_development_enabled: {
						value: false,
					},
					responsive_web_dcm_2_enabled: { value: true },
					responsive_web_deamplification_replies_dropdown_selector_enabled: {
						value: false,
					},
					responsive_web_device_follow_without_user_follow_enabled: {
						value: false,
					},
					responsive_web_disconnect_third_party_sso_enabled: {
						value: true,
					},
					responsive_web_dockable_autoplay_policy_enabled: {
						value: true,
					},
					responsive_web_dynamic_product_ads_enabled: {
						value: true,
					},
					responsive_web_edit_tweet_api_enabled: {
						value: true,
					},
					responsive_web_edit_tweet_composition_enabled: {
						value: true,
					},
					responsive_web_edit_tweet_enabled: { value: false },
					responsive_web_edit_tweet_perspective_enabled: {
						value: false,
					},
					responsive_web_edit_tweet_upsell_enabled: {
						value: true,
					},
					responsive_web_element_size_impression_scribe_enabled: {
						value: true,
					},
					responsive_web_enhance_cards_enabled: {
						value: false,
					},
					responsive_web_eu_countries: {
						value: [
							"at",
							"be",
							"bg",
							"ch",
							"cy",
							"cz",
							"de",
							"dk",
							"ee",
							"es",
							"fi",
							"fr",
							"gb",
							"gr",
							"hr",
							"hu",
							"ie",
							"is",
							"it",
							"li",
							"lt",
							"lu",
							"lv",
							"mt",
							"nl",
							"no",
							"pl",
							"pt",
							"ro",
							"se",
							"si",
							"sk",
						],
					},
					responsive_web_explorer_ads_enabled: {
						value: true,
					},
					responsive_web_extension_compatibility_hide: {
						value: true,
					},
					responsive_web_extension_compatibility_impression_guard: {
						value: true,
					},
					responsive_web_extension_compatibility_override_param: {
						value: true,
					},
					responsive_web_extension_compatibility_scribe: {
						value: true,
					},
					responsive_web_extension_compatibility_size_threshold: {
						value: 50,
					},
					responsive_web_fake_root_twitter_domain_for_testing: {
						value: false,
					},
					responsive_web_fetch_hashflags_on_boot: {
						value: true,
					},
					responsive_web_follower_count_reduction_copy_enabled: {
						value: true,
					},
					responsive_web_footer_categorized_variant_enabled: {
						value: false,
					},
					responsive_web_framerate_tracking_home_enabled: {
						value: false,
					},
					responsive_web_gaggle_site_enabled: {
						value: false,
					},
					responsive_web_graphql_exclude_directive_enabled: {
						value: true,
					},
					responsive_web_graphql_feedback: { value: true },
					responsive_web_graphql_skip_user_profile_image_extensions_enabled: {
						value: false,
					},
					responsive_web_graphql_timeline_navigation_enabled: {
						value: true,
					},
					responsive_web_hashtag_highlight_is_enabled: {
						value: false,
					},
					responsive_web_hashtag_highlight_show_avatar: {
						value: false,
					},
					responsive_web_hashtag_highlight_use_small_font: {
						value: false,
					},
					responsive_web_hevc_upload_preview_enabled: {
						value: false,
					},
					responsive_web_home_pinned_timelines_latest_enabled: {
						value: true,
					},
					responsive_web_home_pinned_timelines_lists_enabled: {
						value: true,
					},
					responsive_web_impression_pixel_enabled: {
						value: true,
					},
					responsive_web_impression_tracker_refactor_enabled: {
						value: true,
					},
					responsive_web_install_banner_show_immediate: {
						value: true,
					},
					responsive_web_instream_video_redesign_enabled: {
						value: true,
					},
					responsive_web_instream_video_store_keyed: {
						value: true,
					},
					responsive_web_lbm_v2_home_enabled: {
						value: false,
					},
					responsive_web_lbm_v2_replies_enabled: {
						value: false,
					},
					responsive_web_left_nav_refresh_connect_enabled: {
						value: false,
					},
					responsive_web_left_nav_refresh_topics_enabled: {
						value: false,
					},
					responsive_web_list_tweet_integration_enabled: {
						value: false,
					},
					responsive_web_live_commerce_enabled: {
						value: true,
					},
					responsive_web_live_video_parity_periscope_auth_enabled: {
						value: false,
					},
					responsive_web_lo_gating_prominent_sta_button_paths: {
						value: "switch-to-app-footer",
					},
					responsive_web_locale_context_direction_enabled: {
						value: true,
					},
					responsive_web_location_spotlight_display_map: {
						value: true,
					},
					responsive_web_location_spotlight_v1_config: {
						value: true,
					},
					responsive_web_location_spotlight_v1_display: {
						value: true,
					},
					responsive_web_logged_out_explore_enabled: {
						value: true,
					},
					responsive_web_logged_out_explore_home_path_enabled: {
						value: true,
					},
					responsive_web_logged_out_gating_13622_ddg: {
						value: "",
					},
					responsive_web_logged_out_gating_14788_ddg: {
						value: "",
					},
					responsive_web_logged_out_gating_14992_ddg: {
						value: "",
					},
					responsive_web_logged_out_gating_15377_ddg: {
						value: "",
					},
					responsive_web_logged_out_gating_non_holdback_ddgs: {
						value: "",
					},
					responsive_web_logged_out_notifications_enabled: {
						value: false,
					},
					responsive_web_logged_out_notifications_fatigue_days_count: {
						value: 7,
					},
					responsive_web_logged_out_notifications_including_home: {
						value: false,
					},
					responsive_web_login_input_type_email_enabled: {
						value: false,
					},
					responsive_web_login_signup_sheet_app_install_cta_enabled: {
						value: true,
					},
					responsive_web_media_upload_limit_2g: {
						value: 250,
					},
					responsive_web_media_upload_limit_3g: {
						value: 1500,
					},
					responsive_web_media_upload_limit_slow_2g: {
						value: 150,
					},
					responsive_web_media_upload_md5_hashing_enabled: {
						value: true,
					},
					responsive_web_media_upload_metrics_enabled: {
						value: true,
					},
					responsive_web_media_upload_target_jpg_pixels_per_byte: {
						value: 1,
					},
					responsive_web_menu_section_divider_enabled: {
						value: false,
					},
					responsive_web_mixed_media_composition_enabled: {
						value: false,
					},
					responsive_web_mixed_media_consumption_enabled: {
						value: true,
					},
					responsive_web_mobile_app_spotlight_v1_config: {
						value: false,
					},
					responsive_web_mobile_app_spotlight_v1_display: {
						value: false,
					},
					responsive_web_multiple_account_limit: { value: 5 },
					responsive_web_new_copy_security_key_2fa_enabled: {
						value: true,
					},
					responsive_web_new_user_badge_color_enabled: {
						value: true,
					},
					responsive_web_nft_avatar: { value: true },
					responsive_web_nft_avatar_help_link: {
						value:
							"https://help.twitter.com/en/using-twitter/twitter-blue-labs#nft",
					},
					responsive_web_notifications_empty_state_redesign_variant: {
						value: "control",
					},
					responsive_web_ntab_verified_mentions_vit_internal_dogfood: {
						value: true,
					},
					responsive_web_oauth2_consent_flow_enabled: {
						value: true,
					},
					responsive_web_ocf_reportflow_appeals_enabled: {
						value: false,
					},
					responsive_web_ocf_reportflow_dms_enabled: {
						value: false,
					},
					responsive_web_ocf_reportflow_lists_enabled: {
						value: true,
					},
					responsive_web_ocf_reportflow_profiles_enabled: {
						value: true,
					},
					responsive_web_ocf_reportflow_promoted_enabled: {
						value: false,
					},
					responsive_web_ocf_reportflow_spaces_enabled: {
						value: false,
					},
					responsive_web_ocf_reportflow_suspension_appeals_enabled: {
						value: true,
					},
					responsive_web_ocf_reportflow_testers: {
						value: false,
					},
					responsive_web_ocf_reportflow_tweets_enabled: {
						value: true,
					},
					responsive_web_ocf_sms_autoverify_darkwrite: {
						value: false,
					},
					responsive_web_ocf_sms_autoverify_enabled: {
						value: false,
					},
					responsive_web_offscreen_video_scroller_removal_enabled: {
						value: false,
					},
					responsive_web_one_hour_edit_window_enabled: {
						value: true,
					},
					responsive_web_open_app_appbar_button_enabled: {
						value: true,
					},
					responsive_web_open_in_app_prompt_enabled: {
						value: false,
					},
					responsive_web_opengraph_image_tweet_copy_1: {
						value: true,
					},
					responsive_web_opengraph_play_icon_overlay: {
						value: true,
					},
					responsive_web_opengraph_video_tweet_copy_1: {
						value: true,
					},
					responsive_web_original_tweet_nudge_enabled: {
						value: false,
					},
					responsive_web_original_tweet_nudge_show_nudge: {
						value: false,
					},
					responsive_web_original_tweet_nudge_supported_languages: {
						value: ["en"],
					},
					responsive_web_passwordless_sso_enabled: {
						value: false,
					},
					responsive_web_pinned_replies_enabled: {
						value: false,
					},
					responsive_web_placeholder_siwg_button_enabled: {
						value: true,
					},
					responsive_web_preload_app_shell_enabled: {
						value: false,
					},
					responsive_web_prerolls_fullscreen_disabled_on_ios: {
						value: false,
					},
					responsive_web_professional_journeys_holdback_enabled: {
						value: false,
					},
					responsive_web_profile_spotlight_v0_config: {
						value: true,
					},
					responsive_web_profile_spotlight_v0_display: {
						value: true,
					},
					responsive_web_qp_keyword_targeting_enabled: {
						value: false,
					},
					responsive_web_reader_extended_menu: {
						value: true,
					},
					responsive_web_redux_use_fragment_enabled: {
						value: false,
					},
					responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled:
						{ value: false },
					responsive_web_repeat_profile_visits_notifications_enabled: {
						value: false,
					},
					responsive_web_reply_nudge_copy_version: {
						value: 1,
					},
					responsive_web_reply_nudge_enabled: { value: true },
					responsive_web_reply_nudge_show_nudge: {
						value: true,
					},
					responsive_web_reply_nudge_supported_languages: {
						value: ["en"],
					},
					responsive_web_reply_nudge_testing_keyword: {
						value: false,
					},
					responsive_web_reply_storm_enabled: {
						value: false,
					},
					responsive_web_report_page_not_found: {
						value: false,
					},
					responsive_web_scroller_autopoll_enabled: {
						value: false,
					},
					responsive_web_scroller_top_positioning_enabled: {
						value: false,
					},
					responsive_web_search_home_page_design_variation: {
						value: "",
					},
					responsive_web_send_cookies_metadata_enabled: {
						value: true,
					},
					responsive_web_server_user_profile_fetch_enabled: {
						value: false,
					},
					responsive_web_settings_timeline_polling_enabled: {
						value: false,
					},
					responsive_web_settings_timeline_polling_interval_ms: {
						value: 0,
					},
					responsive_web_settings_timeline_refresh_background_interval: {
						value: 0,
					},
					responsive_web_share_action_order_desktop: {
						value: "copy_link_first_bookmark_last",
					},
					responsive_web_share_action_order_mobile: {
						value: "default",
					},
					responsive_web_share_only_tweet_url_omit_title_and_text: {
						value: true,
					},
					responsive_web_sidebar_ttf_enabled: {
						value: false,
					},
					responsive_web_spud_enabled: { value: true },
					responsive_web_sso_redirect_enabled: {
						value: true,
					},
					responsive_web_ssr_footer_categorized_variant_enabled: {
						value: true,
					},
					responsive_web_ssr_verified_crawler_rux_injections_enabled: {
						value: true,
					},
					responsive_web_subscribers_ntab_for_creators_enabled: {
						value: true,
					},
					responsive_web_suppress_app_button_banner_suppressed: {
						value: false,
					},
					responsive_web_themed_scrollbars: { value: false },
					responsive_web_third_party_sso_buttons_enabled: {
						value: true,
					},
					responsive_web_timeline_cover_killswitch_enabled: {
						value: false,
					},
					responsive_web_timeline_relay_lists_management_enabled: {
						value: false,
					},
					responsive_web_timeline_relay_user_lists_enabled: {
						value: false,
					},
					responsive_web_tracer_global_trace_sample_rate: {
						value: 1,
					},
					responsive_web_trends_setting_new_endpoints: {
						value: true,
					},
					responsive_web_tweet_analytics_m2_enabled: {
						value: true,
					},
					responsive_web_tweet_analytics_m3_enabled: {
						value: false,
					},
					responsive_web_tweet_analytics_promoted_audience_demographics_enabled:
						{ value: true },
					responsive_web_tweet_analytics_video_metrics_v2_enabled: {
						value: true,
					},
					responsive_web_twitter_article_compose_enabled: {
						value: false,
					},
					responsive_web_twitter_article_cover_aspect_ratio_5_2: {
						value: true,
					},
					responsive_web_twitter_article_data_v2_enabled: {
						value: false,
					},
					responsive_web_twitter_article_geo_gated: {
						value: false,
					},
					responsive_web_twitter_article_max_times_show_tweet_banner: {
						value: 0,
					},
					responsive_web_twitter_article_notes_tab_enabled: {
						value: false,
					},
					responsive_web_twitter_article_tweet_other_notes_enabled: {
						value: true,
					},
					responsive_web_twitter_article_tweet_own_notes_enabled: {
						value: false,
					},
					responsive_web_twitter_article_view_enabled: {
						value: true,
					},
					responsive_web_twitter_blue_signup_nux_enabled: {
						value: true,
					},
					responsive_web_twitter_blue_subscriptions_disabled: {
						value: false,
					},
					responsive_web_twitter_blue_verified_badge_ntab_all_badge_is_enabled:
						{ value: false },
					responsive_web_twitter_blue_verified_badge_ntab_empty_state_enabled: {
						value: true,
					},
					responsive_web_twitter_blue_verified_badge_ntab_verified_tab_index: {
						value: 2,
					},
					responsive_web_twitter_blue_verified_badge_settings_blue_verified_features_enabled:
						{ value: true },
					responsive_web_unsupported_entry_tombstone: {
						value: false,
					},
					responsive_web_use_app_button_variations: {
						value: "treatment_1",
					},
					responsive_web_use_app_prompt_copy_variant: {
						value: "prompt_better",
					},
					responsive_web_use_app_prompt_enabled: {
						value: true,
					},
					responsive_web_use_badge_counts_for_ntab: {
						value: false,
					},
					responsive_web_user_badge_education_get_verified_button_enabled: {
						value: true,
					},
					responsive_web_user_badge_education_redesign_enabled: {
						value: true,
					},
					responsive_web_verified_organizations_application_form_enabled: {
						value: false,
					},
					responsive_web_verified_organizations_invoice_enabled: {
						value: false,
					},
					responsive_web_verified_organizations_verified_entry_enabled: {
						value: true,
					},
					responsive_web_video_pcomplete_enabled: {
						value: true,
					},
					responsive_web_video_promoted_logging_enabled: {
						value: true,
					},
					responsive_web_video_trimmer_enabled: {
						value: false,
					},
					responsive_web_vod_muted_captions_enabled: {
						value: true,
					},
					responsive_web_vs_config_resize_observer_enabled: {
						value: true,
					},
					responsive_web_zipkin_api_requests_enabled: {
						value: false,
					},
					responsive_web_zipkin_api_requests_paths_allowlist: {
						value: ["/2/timeline/home.json"],
					},
					rito_safety_mode_blocked_profile_enabled: {
						value: true,
					},
					rito_safety_mode_features_enabled: { value: false },
					rito_safety_mode_modal_prompt_enabled: {
						value: false,
					},
					rito_safety_mode_settings_enabled: { value: false },
					rweb_client_transaction_id_enabled: {
						value: false,
					},
					rweb_enable_logged_out_search_search_bar_enabled: {
						value: true,
					},
					rweb_home_mixer_enable_social_context_filter_social_contexts: {
						value: true,
					},
					rweb_home_perf_client_prefetch_bypass_sw: {
						value: false,
					},
					rweb_home_perf_client_prefetch_mode: {
						value: "none",
					},
					rweb_home_perf_client_prefetch_timeout_ms: {
						value: 0,
					},
					rweb_lists_search_enabled: { value: true },
					rweb_lists_timeline_redesign_enabled: {
						value: true,
					},
					rweb_tweets_boosting_enabled: { value: false },
					rweb_tweets_reply_context_hidden: { value: true },
					rweb_tweets_tweet_detail_font_size: {
						value: "headline2",
					},
					rweb_update_fatigue_switch_to_app_day_timeout: {
						value: 7,
					},
					rweb_update_fatigue_switch_to_app_link: {
						value: "BannerSwitchToApp",
					},
					rweb_video_tagging_enabled: { value: false },
					sc_mock_data_enabled: { value: false },
					sc_r4_enabled: { value: false },
					scribe_api_error_sample_size: { value: 0 },
					scribe_api_sample_size: { value: 100 },
					scribe_cdn_host_list: {
						value: [
							"si0.twimg.com",
							"si1.twimg.com",
							"si2.twimg.com",
							"si3.twimg.com",
							"a0.twimg.com",
							"a1.twimg.com",
							"a2.twimg.com",
							"a3.twimg.com",
							"abs.twimg.com",
							"amp.twimg.com",
							"o.twimg.com",
							"pbs.twimg.com",
							"pbs-eb.twimg.com",
							"pbs-ec.twimg.com",
							"pbs-v6.twimg.com",
							"pbs-h1.twimg.com",
							"pbs-h2.twimg.com",
							"video.twimg.com",
							"platform.twitter.com",
							"cdn.api.twitter.com",
							"ton.twimg.com",
							"v.cdn.vine.co",
							"mtc.cdn.vine.co",
							"edge.vncdn.co",
							"mid.vncdn.co",
						],
					},
					scribe_cdn_sample_size: { value: 50 },
					scribe_web_nav_sample_size: { value: 100 },
					search_results_disable_latest_tab_when_logged_out: {
						value: false,
					},
					search_timelines_graphql_enabled: { value: true },
					sensitive_media_settings_enabled: { value: false },
					sensitive_tweet_warnings_enabled: { value: true },
					settings_revamp_search_bar_enabled: { value: true },
					shortened_tracking_parameters_mapping: {
						value: [
							"01:twcamp^share|twsrc^android|twgr^sms",
							"02:twcamp^share|twsrc^android|twgr^email",
							"03:twcamp^share|twsrc^android|twgr^gmail",
							"04:twcamp^share|twsrc^android|twgr^facebook",
							"05:twcamp^share|twsrc^android|twgr^wechat",
							"06:twcamp^share|twsrc^android|twgr^line",
							"07:twcamp^share|twsrc^android|twgr^fbmessenger",
							"08:twcamp^share|twsrc^android|twgr^whatsapp",
							"09:twcamp^share|twsrc^android|twgr^other",
							"10:twcamp^share|twsrc^ios|twgr^sms",
							"11:twcamp^share|twsrc^ios|twgr^email",
							"12:twcamp^share|twsrc^ios|twgr^other",
							"13:twcamp^share|twsrc^android|twgr^download",
							"14:twcamp^share|twsrc^ios|twgr^download",
							"15:twcamp^share|twsrc^android|twgr^hangouts",
							"16:twcamp^share|twsrc^android|twgr^twitterdm",
							"17:twcamp^share|twsrc^m5|twgr^email",
							"18:twcamp^share|twsrc^m5|twgr^download",
							"19:twcamp^share|twsrc^android|twgr^copy",
							"20:twcamp^share|twsrc^m5|twgr^copy",
							"21:twcamp^share|twsrc^ios|twgr^copy",
							"22:twcamp^share|twsrc^ios|twgr^snapchat",
							"23:twcamp^share|twsrc^android|twgr^snapchat",
							"24:twcamp^share|twsrc^ios|twgr^whatsapp",
							"25:twcamp^share|twsrc^ios|twgr^fbmessenger",
							"26:twcamp^share|twsrc^ios|twgr^facebook",
							"27:twcamp^share|twsrc^ios|twgr^gmail",
							"28:twcamp^share|twsrc^ios|twgr^telegram",
							"29:twcamp^share|twsrc^ios|twgr^line",
							"30:twcamp^share|twsrc^ios|twgr^viber",
							"31:twcamp^share|twsrc^android|twgr^slack",
							"32:twcamp^share|twsrc^android|twgr^kakao",
							"33:twcamp^share|twsrc^android|twgr^discord",
							"34:twcamp^share|twsrc^android|twgr^reddit",
							"35:twcamp^share|twsrc^android|twgr^telegram",
							"36:twcamp^share|twsrc^android|twgr^instagram",
							"37:twcamp^share|twsrc^android|twgr^daum",
							"38:twcamp^share|twsrc^ios|twgr^instagram",
							"39:twcamp^share|twsrc^ios|twgr^linkedin",
							"40:twcamp^share|twsrc^android|twgr^linkedin",
							"41:twcamp^share|twsrc^gryphon|twgr^copy",
							"42:twcamp^share|twsrc^iphone|twgr^sms",
							"43:twcamp^share|twsrc^iphone|twgr^email",
							"44:twcamp^share|twsrc^iphone|twgr^other",
							"45:twcamp^share|twsrc^iphone|twgr^download",
							"46:twcamp^share|twsrc^iphone|twgr^copy",
							"47:twcamp^share|twsrc^iphone|twgr^snapchat",
							"48:twcamp^share|twsrc^iphone|twgr^whatsapp",
							"49:twcamp^share|twsrc^iphone|twgr^fbmessenger",
							"50:twcamp^share|twsrc^iphone|twgr^facebook",
							"51:twcamp^share|twsrc^iphone|twgr^gmail",
							"52:twcamp^share|twsrc^iphone|twgr^telegram",
							"53:twcamp^share|twsrc^iphone|twgr^line",
							"54:twcamp^share|twsrc^iphone|twgr^viber",
							"55:twcamp^share|twsrc^iphone|twgr^instagram",
							"56:twcamp^share|twsrc^iphone|twgr^linkedin",
							"57:twcamp^share|twsrc^ipad|twgr^sms",
							"58:twcamp^share|twsrc^ipad|twgr^email",
							"59:twcamp^share|twsrc^ipad|twgr^other",
							"60:twcamp^share|twsrc^ipad|twgr^download",
							"61:twcamp^share|twsrc^ipad|twgr^copy",
							"62:twcamp^share|twsrc^ipad|twgr^snapchat",
							"63:twcamp^share|twsrc^ipad|twgr^whatsapp",
							"64:twcamp^share|twsrc^ipad|twgr^fbmessenger",
							"65:twcamp^share|twsrc^ipad|twgr^facebook",
							"66:twcamp^share|twsrc^ipad|twgr^gmail",
							"67:twcamp^share|twsrc^ipad|twgr^telegram",
							"68:twcamp^share|twsrc^ipad|twgr^line",
							"69:twcamp^share|twsrc^ipad|twgr^viber",
							"70:twcamp^share|twsrc^ipad|twgr^instagram",
							"71:twcamp^share|twsrc^ipad|twgr^linkedin",
						],
					},
					smbo_legacy_pac_is_in_follow_position_test: {
						value: false,
					},
					social_context_and_topic_context_refresh_alignment_enabled: {
						value: false,
					},
					spaces_2022_h2_clipping: { value: true },
					spaces_2022_h2_clipping_consumption: {
						value: true,
					},
					spaces_2022_h2_clipping_duration_seconds: {
						value: 30,
					},
					spaces_2022_h2_follow_host: { value: true },
					spaces_2022_h2_reactions_web_send: { value: true },
					spaces_2022_h2_spacebar_use_mock_data: {
						value: false,
					},
					spaces_2022_h2_spacebar_web_sidebar: {
						value: true,
					},
					spaces_2022_h2_spacebar_web_topnavbar: {
						value: "purple",
					},
					spaces_2022_h2_spaces_communities: { value: true },
					standardized_nudges_misinfo: { value: true },
					standardized_nudges_toxicity: { value: false },
					stateful_login_enabled: { value: true },
					stateful_login_intent_enabled: { value: true },
					subscriptions_annual_subscription_signup_enabled: {
						value: true,
					},
					subscriptions_blue_premium_labeling_enabled: {
						value: true,
					},
					subscriptions_blue_verified_edit_profile_backend_error_message_enabled:
						{ value: true },
					subscriptions_blue_verified_edit_profile_error_message_enabled: {
						value: true,
					},
					subscriptions_enabled: { value: true },
					subscriptions_feature_1002: { value: true },
					subscriptions_feature_1003: { value: true },
					subscriptions_feature_1005: { value: true },
					subscriptions_feature_1006: { value: false },
					subscriptions_feature_1007: { value: true },
					subscriptions_feature_1009: { value: true },
					subscriptions_feature_1011: { value: true },
					subscriptions_feature_1012: { value: false },
					subscriptions_feature_1013: { value: false },
					subscriptions_feature_1014: { value: true },
					subscriptions_feature_labs_1001: { value: true },
					subscriptions_feature_labs_1004: { value: true },
					subscriptions_long_video_rweb_new_copy_enabled: {
						value: true,
					},
					subscriptions_long_video_upload: { value: true },
					subscriptions_management_enabled: { value: true },
					subscriptions_marketing_page_annual_redesign_content_enabled: {
						value: true,
					},
					subscriptions_marketing_page_include_tax_enabled: {
						value: true,
					},
					subscriptions_marketing_page_tiered_redesign_enabled: {
						value: true,
					},
					subscriptions_product_feature_list_api_enabled: {
						value: false,
					},
					subscriptions_settings_item_enabled: {
						value: true,
					},
					subscriptions_sign_up_enabled: { value: true },
					subscriptions_stripe_testing: { value: false },
					subscriptions_tab_customization_on_android_enabled: {
						value: true,
					},
					subscriptions_top_articles_on_ios_enabled: {
						value: true,
					},
					subscriptions_twitter_blue_logo_enabled: {
						value: true,
					},
					subscriptions_verification_info_verified_since_enabled: {
						value: true,
					},
					super_follow_android_web_subscription_enabled: {
						value: true,
					},
					super_follow_exclusive_tweet_creation_api_enabled: {
						value: true,
					},
					super_follow_onboarding_application_perks_enabled: {
						value: true,
					},
					super_follow_onboarding_application_redesign_enabled: {
						value: true,
					},
					super_follow_onboarding_blue_verified_requirement_enabled: {
						value: true,
					},
					super_follow_onboarding_granular_pricing_enabled: {
						value: true,
					},
					super_follow_subscriptions_home_timeline_tab_enabled: {
						value: true,
					},
					super_follow_subscriptions_home_timeline_tab_sticky_enabled: {
						value: true,
					},
					super_follow_subscriptions_tax_calculation_enabled: {
						value: true,
					},
					super_follow_tweet_label_redesign_enabled: {
						value: true,
					},
					super_follow_web_application_enabled: {
						value: true,
					},
					super_follow_web_deactivate_enabled: {
						value: true,
					},
					super_follow_web_debug_enabled: { value: false },
					super_follow_web_edit_perks_enabled: {
						value: true,
					},
					super_follow_web_onboarding_enabled: {
						value: true,
					},
					targeted_project_friday_enabled: { value: false },
					topic_landing_page_clearer_controls_enabled: {
						value: true,
					},
					topic_landing_page_cta_text: { value: "control" },
					topic_landing_page_share_enabled: { value: true },
					topics_context_controls_followed_variation: {
						value: "see_more",
					},
					topics_context_controls_implicit_context_x_enabled: {
						value: true,
					},
					topics_context_controls_implicit_variation: {
						value: "see_more",
					},
					topics_context_controls_inline_prompt_enabled: {
						value: false,
					},
					topics_discovery_page_enabled: { value: false },
					toxic_reply_filter_inline_callout_enabled: {
						value: false,
					},
					toxic_reply_filter_settings_enabled: {
						value: false,
					},
					traffic_rewrite_map: { value: [] },
					trusted_friends_audience_control_exp_variant: {
						value: "control",
					},
					trusted_friends_consumption_enabled: {
						value: true,
					},
					trusted_friends_dash_discovery_enabled: {
						value: true,
					},
					trusted_friends_tweet_creation_enabled: {
						value: true,
					},
					tweet_awards_web_coin_purchase_enabled: {
						value: false,
					},
					tweet_awards_web_coin_purchase_sandbox_enabled: {
						value: false,
					},
					tweet_awards_web_non_focal_tweet_coins_enabled: {
						value: false,
					},
					tweet_awards_web_tipping_enabled: { value: false },
					tweet_limited_actions_config_community_tweet_community_deleted: {
						value: [
							"add_to_bookmarks",
							"add_to_moment",
							"embed",
							"follow",
							"hide_community_tweet",
							"like",
							"lists_add_remove",
							"mute_conversation",
							"pin_to_profile",
							"quote_tweet",
							"react",
							"remove_from_community",
							"reply",
							"retweet",
							"send_via_dm",
							"share_tweet_via",
							"view_hidden_replies",
							"view_tweet_activity",
							"vote_on_poll",
							"highlight",
						],
					},
					tweet_limited_actions_config_community_tweet_community_not_found: {
						value: [
							"add_to_bookmarks",
							"add_to_moment",
							"embed",
							"follow",
							"hide_community_tweet",
							"like",
							"lists_add_remove",
							"mute_conversation",
							"pin_to_profile",
							"quote_tweet",
							"react",
							"remove_from_community",
							"reply",
							"retweet",
							"send_via_dm",
							"share_tweet_via",
							"view_hidden_replies",
							"view_tweet_activity",
							"vote_on_poll",
							"highlight",
						],
					},
					tweet_limited_actions_config_community_tweet_community_suspended: {
						value: [
							"add_to_bookmarks",
							"add_to_moment",
							"embed",
							"follow",
							"hide_community_tweet",
							"like",
							"lists_add_remove",
							"mute_conversation",
							"pin_to_profile",
							"quote_tweet",
							"react",
							"remove_from_community",
							"reply",
							"retweet",
							"send_via_dm",
							"share_tweet_via",
							"view_hidden_replies",
							"view_tweet_activity",
							"vote_on_poll",
							"highlight",
						],
					},
					tweet_limited_actions_config_community_tweet_hidden: {
						value: [
							"add_to_bookmarks",
							"add_to_moment",
							"embed",
							"follow",
							"hide_community_tweet",
							"like",
							"lists_add_remove",
							"mute_conversation",
							"pin_to_profile",
							"quote_tweet",
							"react",
							"reply",
							"retweet",
							"send_via_dm",
							"share_tweet_via",
							"view_hidden_replies",
							"view_tweet_activity",
							"vote_on_poll",
							"highlight",
						],
					},
					tweet_limited_actions_config_community_tweet_member: {
						value: ["embed", "pin_to_profile", "retweet", "highlight"],
					},
					tweet_limited_actions_config_community_tweet_member_removed: {
						value: [
							"add_to_bookmarks",
							"add_to_moment",
							"embed",
							"follow",
							"hide_community_tweet",
							"like",
							"lists_add_remove",
							"mute_conversation",
							"pin_to_profile",
							"quote_tweet",
							"react",
							"remove_from_community",
							"reply",
							"retweet",
							"send_via_dm",
							"share_tweet_via",
							"view_hidden_replies",
							"view_tweet_activity",
							"vote_on_poll",
							"highlight",
						],
					},
					tweet_limited_actions_config_community_tweet_non_member: {
						value: [
							"embed",
							"like",
							"pin_to_profile",
							"react",
							"reply",
							"reply_down_vote",
							"retweet",
							"share_tweet_via",
							"vote_on_poll",
							"highlight",
						],
					},
					tweet_limited_actions_config_disable_state_media_autoplay: {
						value: ["autoplay"],
					},
					tweet_limited_actions_config_dpa_enabled: {
						value: true,
					},
					tweet_limited_actions_config_dynamic_product_ad: {
						value: [
							"reply",
							"retweet",
							"quote_tweet",
							"share_tweet_via",
							"send_via_dm",
							"copy_link",
							"add_to_bookmarks",
							"like",
						],
					},
					tweet_limited_actions_config_enabled: {
						value: true,
					},
					tweet_limited_actions_config_freedom_of_speech_not_reach: {
						value: [
							"reply",
							"retweet",
							"quote_tweet",
							"share_tweet_via",
							"add_to_bookmarks",
							"pin_to_profile",
							"copy_link",
							"send_via_dm",
							"like",
							"embed",
							"highlight",
							"edit_tweet",
						],
					},
					tweet_limited_actions_config_limit_trusted_friends_tweet: {
						value: [
							"retweet",
							"quote_tweet",
							"share_tweet_via",
							"send_via_dm",
							"copy_link",
							"view_tweet_activity",
							"embed",
							"add_to_moment",
						],
					},
					tweet_limited_actions_config_non_compliant: {
						value: [
							"reply",
							"retweet",
							"like",
							"react",
							"send_via_dm",
							"add_to_bookmarks",
							"add_to_moment",
							"pin_to_profile",
							"view_tweet_activity",
							"share_tweet_via",
							"copy_link",
							"highlight",
						],
					},
					tweet_limited_actions_config_skip_tweet_detail: {
						value: ["reply"],
					},
					tweet_limited_actions_config_skip_tweet_detail_enabled: {
						value: true,
					},
					tweet_limited_actions_config_soft_nudge_with_quote_tweet: {
						value: ["show_retweet_action_menu"],
					},
					tweet_with_visibility_results_all_gql_limited_actions_enabled: {
						value: false,
					},
					tweet_with_visibility_results_partial_gql_limited_actions_enabled: {
						value: false,
					},
					tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled:
						{ value: false },
					tweetypie_unmention_optimization_enabled: {
						value: true,
					},
					twitter_chat_communities_chat_enabled: {
						value: false,
					},
					twitter_delegate_enabled: { value: false },
					ucpd_enabled: { value: true },
					unified_cards_collection_ads_convert_to_image_website_card: {
						value: false,
					},
					unified_cards_dpa_cta_button_enabled: {
						value: true,
					},
					unified_cards_dpa_metadata_enabled: { value: true },
					unified_cards_dpa_placeholder_media_key: {
						value: ["3_1485707239990054912"],
					},
					user_display_name_max_limit: { value: 50 },
					verified_phone_label_enabled: { value: false },
					view_counts_everywhere_api_enabled: { value: true },
					view_counts_public_visibility_enabled: {
						value: true,
					},
					vod_attribution_tweet_detail_pivot_enabled: {
						value: true,
					},
					voice_consumption_enabled: { value: true },
					voice_rooms_card_version: { value: 2 },
					voice_rooms_discovery_page_enabled: {
						value: false,
					},
					voice_rooms_end_screen_participants: {
						value: true,
					},
					voice_rooms_expanded_dock: { value: true },
					voice_rooms_expanded_dock_reactions: {
						value: true,
					},
					voice_rooms_host_analytics_enabled: { value: true },
					voice_rooms_recent_search_audiospace_ring_enabled: {
						value: true,
					},
					voice_rooms_replay_consumption: { value: true },
					voice_rooms_search_results_page_audiospace_ring_enabled: {
						value: false,
					},
					voice_rooms_sharing_listening_data_with_followers_setting_enabled: {
						value: true,
					},
					voice_rooms_speaking_enabled: { value: false },
					voice_rooms_typeahead_audiospace_ring_enabled: {
						value: true,
					},
					web_image_large_webp_variants: { value: false },
					web_video_bitrate_persistence_enabled: {
						value: false,
					},
					web_video_caption_repositioning_enabled: {
						value: true,
					},
					web_video_hls_android_mse_enabled: { value: true },
					web_video_hls_mp4_threshold_sec: { value: 0 },
					web_video_hls_variant_version: { value: "1" },
					web_video_hlsjs_version: { value: "" },
					web_video_playback_rate_enabled: { value: true },
					web_video_player_size_cap_disabled: { value: true },
					web_video_prefetch_playlist_autoplay_disabled: {
						value: false,
					},
					web_video_safari_hlsjs_enabled: { value: true },
					web_video_transcribed_captions_enabled: {
						value: false,
					},
				},
				impression_pointers: {},
				impressions: {},
				keysRead: {},
				settingsVersion: "e5ccf45124e7e685c8a178299bfa0b5e",
			},
			debug: {},
			featureSetToken: "9db40064459674fd67b38e9d5346c531057f4e25",
			isLoaded: true,
			isLoading: false,
			customOverrides: {},
		},
		settings: {
			local: {
				nextPushCheckin: 0,
				shouldAutoPlayGif: false,
				scale: "normal",
				themeColor: "blue500",
				highContrastEnabled: false,
				loginPromptLastShown: 0,
				reducedMotionEnabled: false,
				showTweetMediaDetailDrawer: true,
				autoPollNewTweets: false,
				shouldAutoTagLocation: false,
				undoPreview: {},
				replyVotingSurveyClicked: 0,
				pushNotificationsPermission: null,
			},
			remote: {
				settings: {
					display_sensitive_media: false,
					protected: false,
					screen_name: "notnullptr",
					always_use_https: true,
					use_cookie_personalization: false,
					sleep_time: {
						enabled: false,
						end_time: null,
						start_time: null,
					},
					geo_enabled: false,
					language: "en",
					discoverable_by_email: false,
					discoverable_by_mobile_phone: false,
					personalized_trends: true,
					allow_media_tagging: "none",
					allow_contributor_request: "all",
					allow_ads_personalization: false,
					allow_logged_out_device_personalization: false,
					allow_location_history_personalization: false,
					allow_sharing_data_for_third_party_personalization: false,
					allow_dms_from: "all",
					allow_dm_groups_from: "following",
					translator_type: "none",
					country_code: "gb",
					nsfw_user: false,
					nsfw_admin: false,
					ranked_timeline_setting: null,
					ranked_timeline_eligible: null,
					address_book_live_sync_enabled: false,
					universal_quality_filtering_enabled: "enabled",
					dm_receipt_setting: "all_enabled",
					alt_text_compose_enabled: null,
					mention_filter: "unfiltered",
					allow_authenticated_periscope_requests: true,
					protect_password_reset: false,
					require_password_login: false,
					requires_login_verification: false,
					ext: { ssoConnections: { r: { ok: [] }, ttl: -1 } },
					dm_quality_filter: "enabled",
					autoplay_disabled: false,
					settings_metadata: {},
				},
				fetchStatus: "loaded",
			},
			dataSaver: { dataSaverMode: false },
			transient: {
				dtabBarInfo: { hide: false },
				loginPromptShown: false,
				lastViewedDmInboxPath: "/messages",
				themeFocus: "",
			},
		},
		devices: {
			browserPush: {
				fetchStatus: "none",
				pushNotificationsPrompt: {
					dismissed: false,
					fetchStatus: "none",
				},
				subscribed: false,
				supported: null,
			},
			devices: {
				data: { emails: [], phone_numbers: [] },
				fetchStatus: "none",
			},
			notificationSettings: {
				push_settings: { error: null, fetchStatus: "none" },
				push_settings_template: { template: { settings: [] } },
				checkin_time: null,
			},
		},
		educationFlags: {
			CommunitiesEducationComposerControls: 1682953864548,
			TrustedFriendsEducationFlag: 1682953864542,
			NewUserPromptEducation: 1682788109629,
		},
		userClaim: {
			config: { subscriptions: {}, features: {} },
			debug: {},
			fetchStatus: "loaded",
		},
		session: {
			country: "GB",
			communitiesActions: { create: false },
			isActiveCreator: false,
			isRestrictedSession: false,
			guestId: user.id_string,
			hasCommunityMemberships: false,
			language: "en",
			oneFactorLoginEligibility: { fetchStatus: "none" },
			ssoInitTokens: {},
			superFollowersCount: 0,
			superFollowsApplicationStatus: "NotStarted",
			user_id: user.id_string,
			userFeatures: { mediatool_studio_library: false },
			isSuperFollowSubscriber: false,
		},
		ads: {
			typeahead: { targetingLocation: {}, forecastAudience: {} },
		},
	};
	const __META_DATA__ = {
		env: "prod",
		isCanary: false,
		sha: "8cfded977598ca88c3d9dbaeb3fc944d2b9a822f",
		isLoggedIn: true,
		hasMultiAccountCookie: false,
		uaParserTags: ["m2", "rweb", "msw"],
		serverDate: 1686147179415,
		cookies: {
			version: "1661819456366",
			fetchedTime: 1661971138705,
			categories: {
				2: [
					"Authorization",
					"DECLINED_DATE",
					"LAST_INVITATION_VIEW",
					"NEW_SUBSCRIPTION_ACCOUNT",
					"SUBMITTED_DATE",
					"_ep_sess",
					"_mb_tk",
					"_sl",
					"_support_session",
					"_ttc_session",
					"_twitter_sess",
					"aa_u",
					"ab_decider",
					"ads_prefs",
					"aem-lang-preference",
					"app_shell_visited",
					"att",
					"auth_multi",
					"auth_token",
					"backendDataInSessionFlag",
					"bouncer_reset_cookie",
					"cd_user_id",
					"client_token",
					"cms-csp-nonce",
					"co",
					"connect.sid",
					"cookies_enabled",
					"csrf_id",
					"csrf_same_site",
					"csrf_same_site_set",
					"csrftoken",
					"ct0",
					"d_prefs",
					"daa",
					"dnt",
					"dtab_local",
					"email_read_only",
					"email_uid",
					"eu_cn",
					"fm",
					"form-lead-gen",
					"gscr",
					"gt",
					"guest_id",
					"kampyleInvitePresented",
					"kampyleSessionPageCounter",
					"kampyleUserPercentile",
					"kampyleUserSessionCount",
					"kampyleUserSessionsCount",
					"kampyle_userid",
					"kdt",
					"lang",
					"lang-preference",
					"language",
					"lastOwnerId",
					"lscr",
					"lv-ctx-",
					"lv-ctx-zzz*",
					"lv-uid",
					"m_session",
					"mdLogger",
					"md_isSurveySubmittedInSession",
					"messages",
					"mobile_ads_stat_type",
					"mobile_ads_time_interval",
					"momentmaker.tos.accepted*",
					"muc",
					"night_mode",
					"request_method",
					"scroll0",
					"scroll1",
					"sessionid",
					"shopify_app_session",
					"shopify_app_session.sig",
					"signup_ui_metrics",
					"ssa-calendar-signup",
					"studio_account",
					"timezone",
					"tooltip",
					"tweetdeck_version",
					"twid",
					"ui_metrics",
					"user_id",
					"zipbox_auth_token",
					"zipbox_forms_auth_token",
				],
			},
		},
	};
	console.log({
		[user.id_string!]: user,
	});
	const html = fs.readFileSync(`${getRootPathSync()}/src/static/twitter.html`);
	const dom = new JSDOM(html);
	dom.window.document.getElementById(
		"state-handler"
	)!.innerHTML = `window.__INITIAL_STATE__ = ${JSON.stringify(
		__INITIAL_STATE__
	)}
    window.__META_DATA__ = ${JSON.stringify(__META_DATA__)}`;
	res.setHeader("content-type", "text/html");
	res.send(dom.serialize());
});

export default router;
