import jewelleryData from "./../data.json" assert { type: "json" };

export class JewelleryController {
    static async getAllJewellery(req, res) {
        try {
            res.status(200).json(jewelleryData);
        } catch (error) {
            res.status(500).json({ message: "Error fetching jewellery data" });
        }
    }

    static async getJewelleryById(req, res) {
        try {
            const { id } = req.params;
            const jewelleryItem = jewelleryData.jewellery.find(
                (item) => item.id === parseInt(id)
            );
            if (!jewelleryItem) {
                return res
                    .status(404)
                    .json({ message: "Jewellery item not found" });
            }
            res.status(200).json(jewelleryItem);
        } catch (error) {
            res.status(500).json({ message: "Error fetching jewellery data" });
        }
    }

    static async createJewellery(req, res) {
        try {
            const newJewelleryItem = req.body;
            jewelleryData.push(newJewelleryItem);
            res.status(201).json(newJewelleryItem);
        } catch (error) {
            res.status(500).json({ message: "Error creating jewellery item" });
        }
    }

    static async updateJewellery(req, res) {
        try {
            const { id } = req.params;
            const jewelleryItem = jewelleryData.jewellery.find(
                (item) => item.id === parseInt(id)
            );
            if (!jewelleryItem) {
                return res
                    .status(404)
                    .json({ message: "Jewellery item not found" });
            }
            const updatedItem = { ...jewelleryItem, ...req.body };
            jewelleryData.splice(
                jewelleryData.indexOf(jewelleryItem),
                1,
                updatedItem
            );
            res.status(200).json(updatedItem);
        } catch (error) {
            res.status(500).json({ message: "Error updating jewellery item" });
        }
    }

    static async deleteJewellery(req, res) {
        try {
            const { id } = req.params;
            const jewelleryItem = jewelleryData.jewellery.find(
                (item) => item.id === parseInt(id)
            );
            if (!jewelleryItem) {
                return res
                    .status(404)
                    .json({ message: "Jewellery item not found" });
            }
            jewelleryData.splice(jewelleryData.indexOf(jewelleryItem), 1);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: "Error deleting jewellery item" });
        }
    }
}
