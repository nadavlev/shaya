import { Request, Response, NextFunction } from "express";


/**
 * Get Places
 * @api {post} /getPlaces
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export function getPlaces(req: Request, res: Response, next: NextFunction) {
  res.json("Get Places request");
}


