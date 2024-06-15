(()=>{"use strict";let e;document.querySelector("body"),document.querySelector("body");const t=document.querySelector("body");!function(t){let d=document.createElement("div");d.id="mainPane";let n=document.createElement("div");n.id="currentWeather";let a=document.createElement("div");a.id="search",function(t){let d=document.createElement("div"),n=document.createElement("input"),a=document.createElement("button");a.textContent="Search",d.appendChild(n),d.appendChild(a),t.appendChild(d),a.addEventListener("click",(async function(){let d=n.value.trim();await async function(t){try{const d=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=195157837b034a1d883103942240706&q=${t}&days=3&aqi=yes&alerts=yes`,{mode:"cors"});e=await d.json(),console.log(e)}catch(e){console.error("An error occurred:",e)}}(d),function(t){let d,n,a;if(e.current){d=document.createElement("span"),n=document.createElement("span"),a=document.createElement("span");let c=e.current.condition.text,o=e.current.temp_c,r=e.current.is_day;d.textContent=c,n.textContent=o,a.textContent=r,t.appendChild(d),t.appendChild(n),t.appendChild(a)}else console.log("No data found for the search keyword.")}(t),async function(){try{e.current?(console.log(e.forecast.forecastday[0].day.condition.text),console.log(e.forecast.forecastday[0].day.avgtemp_c)):console.log("No data found for the search keyword.")}catch(e){console.error("An error occurred:",e)}}()}))}(a);let c=document.createElement("div");c.id="animation";let o=document.createElement("div");o.id="forecast";let r=document.createElement("div"),i=document.createElement("div"),l=document.createElement("div");r.classList.add("day"),r.id="day1",i.classList.add("day"),i.id="day2",l.classList.add("day"),l.id="day3",o.appendChild(r),o.appendChild(i),o.appendChild(l),d.appendChild(n),d.appendChild(a),d.appendChild(c),d.appendChild(o),t.appendChild(d)}(t),function(e){let t=document.createElement("div");t.id="details";let d=document.createElement("div");d.id="info",["wind","humidity","precipitation","pressure","feelsLike","uv","astro1","astro2","astro3"].forEach((e=>{let t=document.createElement("div");t.id=e,d.appendChild(t)}));let n=document.createElement("div");n.id="hourly";for(let e=1;e<=10;e++){let e=document.createElement("div");e.classList.add("hour"),n.appendChild(e)}t.appendChild(d),t.appendChild(n),e.appendChild(t)}(t)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFZLEdEZ0RMLFNBQXFCaEQsR0FDeEIsSUFBSWlELEVBQWNuRCxTQUFTSSxjQUFjLE9BQ3pDK0MsRUFBWTlDLEdBQUssVUFFakIsSUFBSStDLEVBQU9wRCxTQUFTSSxjQUFjLE9BQ2xDZ0QsRUFBSy9DLEdBQUssT0FFSSxDQUFDLE9BQVEsV0FBWSxnQkFBaUIsV0FBWSxZQUFhLEtBQU0sU0FBVSxTQUFVLFVBQy9GZ0QsU0FBUWhELElBQ1osSUFBSWlELEVBQU10RCxTQUFTSSxjQUFjLE9BQ2pDa0QsRUFBSWpELEdBQUtBLEVBQ1QrQyxFQUFLeEMsWUFBWTBDLEVBQUksSUFHekIsSUFBSUMsRUFBU3ZELFNBQVNJLGNBQWMsT0FDcENtRCxFQUFPbEQsR0FBSyxTQUVaLElBQUssSUFBSW1ELEVBQUksRUFBR0EsR0FBSyxHQUFJQSxJQUFLLENBQzFCLElBQUlDLEVBQU96RCxTQUFTSSxjQUFjLE9BQ2xDcUQsRUFBS1QsVUFBVUMsSUFBSSxRQUNuQk0sRUFBTzNDLFlBQVk2QyxFQUN2QixDQUVBTixFQUFZdkMsWUFBWXdDLEdBQ3hCRCxFQUFZdkMsWUFBWTJDLEdBRXhCckQsRUFBT1UsWUFBWXVDLEVBQ3ZCLENDMUVBTyxDQUFZLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGlkZW1vLy4vc3JjL2FwaUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vYXBpZGVtby8uL3NyYy9wYWdlRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYXBpZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuZXhwb3J0IGxldCB3ZWF0aGVyRGF0YTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoc2VhcmNoQ29udGVudCl7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0xOTUxNTc4MzdiMDM0YTFkODgzMTAzOTQyMjQwNzA2JnE9JHtzZWFyY2hDb250ZW50fSZkYXlzPTMmYXFpPXllcyZhbGVydHM9eWVzYCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsvL3BhcnNlIHRvIGpzIG9iamVjdCBmcm9tIGpzb25cbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDdXJyZW50V2VhdGhlcihwYXJlbnQpe1xuICAgIGxldCBjdXJyZW50V2VhdGhlckVsZW1lbnQ7XG4gICAgbGV0IHRlbXByZXR1cmVFbGVtZW50O1xuICAgIGxldCBpc0RheUVsZW1lbnQ7XG4gICAgaWYgKHdlYXRoZXJEYXRhLmN1cnJlbnQpIHtcbiAgICAgICAgY3VycmVudFdlYXRoZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0ZW1wcmV0dXJlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaXNEYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBsZXQgY3VycmVudFdlYXRoZXIgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBsZXQgdGVtcHJldHVyZSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jO1xuICAgICAgICBsZXQgaXNEYXkgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmlzX2RheTtcblxuICAgICAgICBjdXJyZW50V2VhdGhlckVsZW1lbnQudGV4dENvbnRlbnQgPSBjdXJyZW50V2VhdGhlcjtcbiAgICAgICAgdGVtcHJldHVyZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZW1wcmV0dXJlO1xuICAgICAgICBpc0RheUVsZW1lbnQudGV4dENvbnRlbnQgPSBpc0RheTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRWxlbWVudCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0ZW1wcmV0dXJlRWxlbWVudCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChpc0RheUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBkYXRhIGZvdW5kIGZvciB0aGUgc2VhcmNoIGtleXdvcmQuJyk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwZW5kRGFpbHlGb3JlY2FzdCgpe1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MTk1MTU3ODM3YjAzNGExZDg4MzEwMzk0MjI0MDcwNiZxPSR7c2VhcmNoQ29udGVudH0mZGF5cz0zJmFxaT15ZXMmYWxlcnRzPXllc2AsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgLy8gY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7Ly9wYXJzZSB0byBqcyBvYmplY3QgZnJvbSBqc29uXG4gICAgICAgIGlmICh3ZWF0aGVyRGF0YS5jdXJyZW50KSB7Ly9UT0RPOiBsb29wIHRoaXMgZm9yIDMgZGF5cyBhbmQgYXBwZW5kIGluZm9cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24udGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuYXZndGVtcF9jKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBkYXRhIGZvdW5kIGZvciB0aGUgc2VhcmNoIGtleXdvcmQuJyk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yKTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IGdldFdlYXRoZXIsIGFwcGVuZEN1cnJlbnRXZWF0aGVyLCB3ZWF0aGVyRGF0YSwgYXBwZW5kRGFpbHlGb3JlY2FzdH0gZnJvbSAnLi9hcGlIYW5kbGVyJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1haW5QYW5lKHBhcmVudCl7XG4gICAgbGV0IG1haW5QYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpblBhbmUuaWQgPSBcIm1haW5QYW5lXCJcbiAgICBsZXQgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXJyZW50V2VhdGhlci5pZCA9IFwiY3VycmVudFdlYXRoZXJcIjtcbiAgICBsZXQgc2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VhcmNoLmlkID0gXCJzZWFyY2hcIjtcbiAgICBhZGRTZWFyY2hCb3goc2VhcmNoKTtcbiAgICBsZXQgYW5pbWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYW5pbWF0aW9uLmlkID0gXCJhbmltYXRpb25cIjtcbiAgICBsZXQgdGhyZWVEYXlzRkMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aHJlZURheXNGQy5pZCA9IFwiZm9yZWNhc3RcIjtcbiAgICAgICAgbGV0IHRvbW9ycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBkYXlUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGRheVRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvbW9ycm93LmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuICAgICAgICB0b21vcnJvdy5pZCA9IFwiZGF5MVwiO1xuICAgICAgICBkYXlUd28uY2xhc3NMaXN0LmFkZCgnZGF5Jyk7XG4gICAgICAgIGRheVR3by5pZCA9IFwiZGF5MlwiO1xuICAgICAgICBkYXlUaHJlZS5jbGFzc0xpc3QuYWRkKCdkYXknKTtcbiAgICAgICAgZGF5VGhyZWUuaWQgPSBcImRheTNcIjtcbiAgICAgICAgdGhyZWVEYXlzRkMuYXBwZW5kQ2hpbGQodG9tb3Jyb3cpO1xuICAgICAgICB0aHJlZURheXNGQy5hcHBlbmRDaGlsZChkYXlUd28pO1xuICAgICAgICB0aHJlZURheXNGQy5hcHBlbmRDaGlsZChkYXlUaHJlZSk7XG4gICAgbWFpblBhbmUuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXIpO1xuICAgIG1haW5QYW5lLmFwcGVuZENoaWxkKHNlYXJjaCk7XG4gICAgbWFpblBhbmUuYXBwZW5kQ2hpbGQoYW5pbWF0aW9uKTtcbiAgICBtYWluUGFuZS5hcHBlbmRDaGlsZCh0aHJlZURheXNGQyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG1haW5QYW5lKTtcbn1cblxuZnVuY3Rpb24gYWRkU2VhcmNoQm94KHBhcmVudCl7XG4gICAgbGV0IHNlYXJjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSBcIlNlYXJjaFwiO1xuICAgIHNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hCb3gpO1xuICAgIHNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzZWFyY2hEaXYpO1xuXG4gICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHNlYXJjaENvbnRlbnQgPSBzZWFyY2hCb3gudmFsdWUudHJpbSgpO1xuICAgICAgICBhd2FpdCBnZXRXZWF0aGVyKHNlYXJjaENvbnRlbnQpO1xuICAgICAgICBhcHBlbmRDdXJyZW50V2VhdGhlcihwYXJlbnQpO1xuICAgICAgICBhcHBlbmREYWlseUZvcmVjYXN0KHBhcmVudCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRJbmZvUGFuZShwYXJlbnQpIHtcbiAgICBsZXQgZGV0YWlsc1BhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzUGFuZS5pZCA9IFwiZGV0YWlsc1wiO1xuXG4gICAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmlkID0gXCJpbmZvXCI7XG5cbiAgICBsZXQgaW5mb0lkcyA9IFsnd2luZCcsICdodW1pZGl0eScsICdwcmVjaXBpdGF0aW9uJywgJ3ByZXNzdXJlJywgJ2ZlZWxzTGlrZScsICd1dicsICdhc3RybzEnLCAnYXN0cm8yJywgJ2FzdHJvMyddO1xuICAgIGluZm9JZHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlkID0gaWQ7XG4gICAgICAgIGluZm8uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcblxuICAgIGxldCBob3VybHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3VybHkuaWQgPSBcImhvdXJseVwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgICAgICBsZXQgaG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob3VyLmNsYXNzTGlzdC5hZGQoJ2hvdXInKTtcbiAgICAgICAgaG91cmx5LmFwcGVuZENoaWxkKGhvdXIpO1xuICAgIH1cblxuICAgIGRldGFpbHNQYW5lLmFwcGVuZENoaWxkKGluZm8pO1xuICAgIGRldGFpbHNQYW5lLmFwcGVuZENoaWxkKGhvdXJseSk7XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGV0YWlsc1BhbmUpO1xufVxuIiwiaW1wb3J0IHsgYWRkTWFpblBhbmUsIGFkZEluZm9QYW5lIH0gZnJvbSBcIi4vcGFnZUVsZW1lbnRzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmFkZE1haW5QYW5lKGJvZHkpO1xuYWRkSW5mb1BhbmUoYm9keSk7XG4iXSwibmFtZXMiOlsid2VhdGhlckRhdGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnQiLCJtYWluUGFuZSIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImN1cnJlbnRXZWF0aGVyIiwic2VhcmNoIiwic2VhcmNoRGl2Iiwic2VhcmNoQm94Iiwic2VhcmNoQnV0dG9uIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhc3luYyIsInNlYXJjaENvbnRlbnQiLCJ2YWx1ZSIsInRyaW0iLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJnZXRXZWF0aGVyIiwiY3VycmVudFdlYXRoZXJFbGVtZW50IiwidGVtcHJldHVyZUVsZW1lbnQiLCJpc0RheUVsZW1lbnQiLCJjdXJyZW50IiwiY29uZGl0aW9uIiwidGV4dCIsInRlbXByZXR1cmUiLCJ0ZW1wX2MiLCJpc0RheSIsImlzX2RheSIsImFwcGVuZEN1cnJlbnRXZWF0aGVyIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImRheSIsImF2Z3RlbXBfYyIsImFwcGVuZERhaWx5Rm9yZWNhc3QiLCJhZGRTZWFyY2hCb3giLCJhbmltYXRpb24iLCJ0aHJlZURheXNGQyIsInRvbW9ycm93IiwiZGF5VHdvIiwiZGF5VGhyZWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRNYWluUGFuZSIsImRldGFpbHNQYW5lIiwiaW5mbyIsImZvckVhY2giLCJkaXYiLCJob3VybHkiLCJpIiwiaG91ciIsImFkZEluZm9QYW5lIl0sInNvdXJjZVJvb3QiOiIifQ==