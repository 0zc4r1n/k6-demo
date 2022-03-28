import { sleep } from 'k6';
import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const url = 'http://localhost:3000/add'

  const payload = JSON.stringify({
    param1: 10,
    param2: 20
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = http.post(url, payload, params);

  const json = JSON.parse(response.body.toString());

  check(response, {
    'is status 200': (r) => r.status === 200,
  });
  check(json, {
    'result is == 30': (r) => json.result === 30,
  });

  sleep(1);       // Human Behavior
}
