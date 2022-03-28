import { sleep } from 'k6';
import http from 'k6/http';
import { check } from 'k6';

export const options = {
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<10'], // 95% of requests should be below 200ms
  },
};

export default function () {
  const url = 'http://localhost:3000/add'

  const payload = JSON.stringify({
    param1: 100,
    param2: 200
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
  
  sleep(1);       // Human Behavior
}
