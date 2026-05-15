export const QUERY_MOST_USED = `
  select q.question_text, count(*) as antall
  from quiz_answer_events e
  join questions q on q.id = e.question_id
  group by q.id, q.question_text
  order by antall desc limit 10;
`;

export const QUERY_HARDEST_TOPIC = `
  select topic,
    count(*) as forsøk,
    round(100.0 * sum(case when is_correct = false
      then 1 else 0 end) / count(*), 1) as feilprosent
  from quiz_answer_events
  group by topic
  order by feilprosent desc;
`;

export const QUERY_LAST_30_DAYS = `
  select date_trunc('day', created_at) as dag,
    count(*) as forsøk,
    round(100.0 * sum(case when is_correct = false
      then 1 else 0 end) / count(*), 1) as feilprosent
  from quiz_answer_events
  where created_at >= now() - interval '30 days'
  group by dag
  order by dag asc;
`;
