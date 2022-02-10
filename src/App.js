import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_NOTICE = gql`
  query {
		listNotice(data: { page: 1, pageSize: 100, filter: null }) {
			list {
				createdAt
				noticeId
				title
				contents
			}
		}
	}
`;

function App() {
  return (
    <>
      <h1>GraphQL + Apollo Client로 데이터 요청해보기</h1>
      <Query query={GET_NOTICE}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error!(</p>;
    
          return (
            <ul>
              {data.listNotice.list.map((notice) => {
                return (
                  <React.Fragment key={notice.noticedId}>
                    <h2>{notice.title}</h2>
                    <p>{notice.contents}</p>
                    <p>발행 날짜: {notice.createdAt}</p>
                  </React.Fragment>
                )
              })}
            </ul>
          );
        }}
      </Query>
    </>
  );
}

export default App;
