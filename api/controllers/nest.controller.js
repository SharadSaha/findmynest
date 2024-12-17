import prisma from "../lib/prisma.js";

export const getAllNests = async (req, res) => {
  try {
    const nests = prisma.nest.findMany();
    res.status(200).json(nest);
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
    const nest = prisma.nest.findUnique({
      where: { id },
      include: {
        nestDetail: true,
        user: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
      },
    });
    res.status(200).json(nest);
  } catch (err) {
    // console.log(err);
    res
      .status(500)
      .json({ message: `${err.message} -- Failed to get all nests` });
  }
};
export const addNest = async (req, res) => {
  const tokenUserId = req.userId;
  try {
    const newNest = await prisma.nest.create({
      data: {
        ...req.body.nest,
        userId: tokenUserId,
        nestDetail: {
          create: req.body.nestDetail,
        },
      },
    });
    res.status(200).json(newNest);
  } catch (err) {
    // console.log(err);
    res
      .status(500)
      .json({ message: `${err.message} -- Failed to get all nests` });
  }
};
export const updateNest = async (req, res) => {
  try {
    res.status(200).json({ message: "All nests" });
  } catch (err) {
    // console.log(err);
    res
      .status(500)
      .json({ message: `${err.message} -- Failed to get all nests` });
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
      .json({ message: `${err.message} -- Failed to get all nests` });
  }
};
