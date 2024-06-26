import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { LavaForge } from "..";

export default new NativeFunction({
    name: "$lavalinkSeek",
    description: "Seeks the current played song to given position, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to seek song at",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "position",
            description: "The new pos for the player",
            rest: false,
            required: true,
            type: ArgType.Time
        }
    ],
    async execute(ctx, [ g, t ]) {
        const pl = LavaForge.Instance.manager.players.get(g.id)
        if (!pl) return this.success(false)
        const seek = await pl.seek(t)
        return this.success(true)
    },
})