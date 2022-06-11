import { Router } from 'express';
import validator from 'express-validator';
import { listAction, detailAction, createAction, updateAction, deleteAction } from './controller.js.js';

const router = Router();

/**
 * @swager
 * definitions:
 *  movie:
 *      properties:
 *          id:
 *              type: integer
 *              example: 1
 *          title:
 *              type: string
 *              example: IronMan
 *          year:
 *              type: integer
 *              example: 2008
 *          public:
 *              type: integer
 *              example: 1
 *          user:
 *              type: integer
 *              example: 1
 */

/**
 * @swager
 * /movie:
 *  get:
 *      tags:
 *          - movies
 *      description: Returns all movies
 *      produces:
 *          - application/json
 *          - application/xml
 *      responses:
 *          200:
 *              description: An array of movie datasets
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/movie'
 */
router.get('/', listAction);
/**
 * @swager
 * /movie/{movieId}:
 *  get:
 *      tags:
 *          - movies
 *      description: Returns one movie
 *      produces:
 *          - application/json
 *          - application/xml
 *      responses:
 *          200:
 *              description: One movoe object
 *              schema:
 *                  $ref:'#/definitions/movie'
 */
router.get('/:id', detailAction);
router.post(
    '/',
    validator.checkSchema({
        title: {
            errorMessage: 'Title is invalid',
            isString: true,
            isLength: {
                errorMessage: 'Title has to be between 1 and 20',
                options: {
                    min: 1,
                    max: 20,
                },
            },
        },
        year: {
            errorMessage: 'Year is invalid',
            isInt: true
        }
    })
);
router.put('/:id', updateAction);
router.delete('/:id', validator.param('id').isInt(), deleteAction);

export { router };