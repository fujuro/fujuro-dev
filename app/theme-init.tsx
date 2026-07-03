const COOKIE_KEY = "fujuro-theme";
const COOKIE_MAX_AGE = 31536000;

export function ThemeInitScript() {
	return (
		<script
			dangerouslySetInnerHTML={{
				__html: `(function(){try{var s=localStorage.getItem('fujuro-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var e=s==='system'||!s?(d?'dark':'light'):s;document.documentElement.classList.remove('light','dark');document.documentElement.classList.add(e);document.documentElement.style.colorScheme=e;document.cookie='${COOKIE_KEY}='+e+';path=/;max-age=${COOKIE_MAX_AGE};SameSite=Lax'}catch(_){}})();`,
			}}
		/>
	);
}
