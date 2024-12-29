import prisma from "../lib/prisma.js";

export const getAllNests = async (req, res) => {
  try {
    const nests = await prisma.nest.findMany({
      include: {
        nestDetail: true,
        user: {
          select: {
            id: true,
            username: true,
            photo: true,
          },
        },
      },
    });
    res.status(200).json({ data: nests });
  } catch (err) {
    // console.log(err);
    res
      .status(500)
      .json({ message: `${err.message} -- Failed to get all nests` });
  }
};

export const getNest = async (req, res) => {
  try {
    const { id } = req.params;
    const nest = await prisma.nest.findUnique({
      where: { id },
      include: {
        nestDetail: true,
        user: {
          select: {
            id: true,
            username: true,
            name: true,
            email: true,
            photo: true,
          },
        },
      },
    });
    res.status(200).json({ data: nest });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ message: `${err.message} -- Failed to get nest` });
  }
};
export const getNestsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const nests = await prisma.nest.findMany({
      where: { userId },
      include: {
        nestDetail: true,
        user: {
          select: {
            id: true,
            username: true,
            photo: true,
          },
        },
      },
    });
    res.status(200).json({ data: nests });
  } catch (err) {
    // console.log(err);
    res
      .status(500)
      .json({ message: `${err.message} -- Failed to get nests by user` });
  }
};

export const addNest = async (req, res) => {
  try {
    const newNest = await prisma.nest.create({
      data: {
        ...req.body.nest,
        nestDetail: {
          create: req.body.nestDetail,
        },
      },
    });
    res.status(200).json(newNest);
  } catch (err) {
    // console.log(err);
    res.status(500).json({ message: `${err.message} -- Failed to add nest` });
  }
};
export const updateNest = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.nest.update({
      where: { id },
      data: {
        ...req.body.nest,
        nestDetail: {
          update: req.body.nestDetail,
        },
      },
    });
    res.status(200).json({ message: "All nests" });
  } catch (err) {
    // console.log(err);
    res
      .status(500)
      .json({ message: `${err.message} -- Failed to update nest` });
  }
};
export const deleteNest = async (req, res) => {
  const { id } = req.params;
  const tokenUserId = req.userId;
  try {
    const nest = prisma.db.findUnique({ where: { id } });
    if (nest.userId !== tokenUserId)
      return res.status(403).json({ message: "Unauthorized User" });
    await prisma.nest.delete({ where: { id } });

    res.status(200).json({ message: "Deleted nest successfully!" });
  } catch (err) {
    // console.log(err);
    res
      .status(500)
      .json({ message: `${err.message} -- Failed to delete nest` });
  }
};

export const getCityList = async (req, res) => {
  try {
    const cities = await prisma.nest.findMany({
      select: {
        city: true,
      },
      distinct: ["city"],
    });
    res.status(200).json({ data: cities.map((cityRecord) => cityRecord.city) });
  } catch (err) {
    res
      .status(500)
      .json({ message: `${err.message} -- Failed to get unique cities` });
  }
};
