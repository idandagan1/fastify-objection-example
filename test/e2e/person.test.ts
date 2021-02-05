import fastify, { FastifyInstance } from 'fastify';
import initServer from '../../src/app';
import { get } from 'config';
import axios from 'axios';

const BASE_URL: string = get('baseUrl');

describe('Person - End 2 End Tests', () => {
    let instance: FastifyInstance;

    beforeAll(async () => {
        instance = fastify();
        await initServer(instance, {});
    });

    afterAll(() => {
        instance.close();
    });

    describe('GET', () => {
        beforeAll(async () => {
            await Promise.all([
                axios({
                    method: 'post',
                    url: `${BASE_URL}/company`,
                    data: {
                        domain: 'some-company',
                    },
                }),
                axios({
                    method: 'post',
                    url: `${BASE_URL}/person`,
                    data: {
                        companyId: 1,
                        firstName: 'John',
                        lastName: 'Doe',
                    },
                }),
            ]);
        });

        afterAll(async () => {
            try {
                await axios({
                    method: 'delete',
                    url: `${BASE_URL}/person/1`,
                });
            } catch (err) {
                console.log(err);
            }
            try {
                await axios({
                    method: 'delete',
                    url: `${BASE_URL}/company/1`,
                });
            } catch (err) {
                console.log(err);
            }
        });

        it('should get one person by personId', async () => {
            const userId = 1;
            const { status, data } = await axios({
                method: 'get',
                url: `${BASE_URL}/person/${userId}`,
            });

            expect(status).toBe(200);
            expect(data.id).toBe(userId);
        });
    });
});
