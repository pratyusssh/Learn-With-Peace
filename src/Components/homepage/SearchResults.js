import { useEffect, useState } from "react";
import { SearchResultItem } from "./SearchResultItem";

export const SearchResults = (props) => {
  const beackendUrl = `http://localhost:8000/searchresult/`;
  const query = encodeURI(props.queryString);
  const [jsonResult, setJsonResult] = useState({});
  useEffect(() => {
    const getData = async () => {
      let data;
      if (query !== "") {
        console.log(query);
        data = await fetch(beackendUrl + query).then((res) => res.json());
        console.log(data);
      } else {
        data = {};
      }
      setJsonResult(data);
    };
    getData();
  }, [beackendUrl, query]);
  
  //   return (
  //     <div>
  //       {/* <pre>
  //         <code>{JSON.stringify(jsonResult, null, 4)}</code>
  //         okay so this part is taking a break
  //       </pre> */}
  //       {!!jsonResult.items ? (
  //       ) : null}
  //     </div>
  //   );
  if (typeof jsonResult !== "undefined" && jsonResult.length !== 0) {
    console.log("Not undefined apparently");
    return (
      <div className="searchresultsnav">
        {Array.from(jsonResult).map((val) => (
          <SearchResultItem item={val} key={val.etag} />
        ))}
      </div>
    );
  } else {
    console.log(`gosh darnit`);
    return null;
  }
};
